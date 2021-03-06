'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var es6ify      = require('es6ify');
var reactify    = require('reactify');
var nconf       = require('nconf');
var runSequence = require('run-sequence');
var chalk       = require('chalk');
var path        = require('path');
var debowerify  = require('debowerify');

// Styles
gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
  .pipe($.rubySass({
    style: 'expanded',
    precision: 10,
    loadPath: ['app/bower_components']
  }))
  .pipe($.autoprefixer('last 1 version'))
  .pipe(gulp.dest('dist/styles'))
  .pipe($.connect.reload());
});

// Scripts
gulp.task('scripts', function() {
  return browserify({ debug: true })
    .add(es6ify.runtime)
    .add('./app/scripts/app.js')
    .transform(reactify)
    .transform(es6ify)
    .transform(debowerify)
    .bundle()
    .on('error', function(err) {
      $.util.log($.util.colors.red(err.message));
      $.util.beep();
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.connect.reload())
  ;
});

gulp.task('jade', function() {
  return gulp.src('app/template/*.jade')
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest('dist'))
    .pipe($.connect.reload())
  ;
});

// HTML
gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    .pipe($.connect.reload())
  ;
});

// Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.connect.reload())
  ;
});

// Clean
gulp.task('clean', function() {
  return gulp.src(
    ['dist/styles', 'dist/scripts', 'dist/images'],
    {read: false})
    .pipe($.clean())
  ;
});

// Bundle
gulp.task('bundle', ['styles', 'scripts'], function() {
  return gulp.src('./app/*.html')
    .pipe($.rev())
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'))
  ;
});

// Build
gulp.task('build', ['html', 'bundle', 'images']);

// Default task
gulp.task('default', ['clean'], function() {
  return gulp.start('build');
});

// Connect
gulp.task('connect', $.connect.server({
  root: ['dist'],
  port: 9000,
  livereload: true
}));

// Bower helper
gulp.task('bower', function() {
  return gulp.src(
    'app/bower_components/**/*.js',
    {base: 'app/bower_components'})
      .pipe(gulp.dest('dist/bower_components/'))
  ;
});

gulp.task('json', function() {
  return gulp.src(
    'app/scripts/json/**/*.json',
    {base: 'app/scripts'})
      .pipe(gulp.dest('dist/scripts/'))
  ;
});

// Watch
gulp.task('watch', ['build', 'connect'], function() {
  // Watch .json files
  gulp.watch('app/scripts/**/*.json', ['json']);

  // Watch .html files
  gulp.watch('app/*.html', ['html']);

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles']);

  // Watch .jade files
  gulp.watch('app/template/**/*.jade', ['jade', 'html']);

  // Watch .js files
  gulp.watch('app/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('app/images/**/*', ['images']);
});

gulp.task('check-env', function() {
  if (ENV === 'dev') {
    onError('cannot deploy into the `dev` environment.', true);
  }
});

// Upload built assets to S3
gulp.task('s3', function() {
  ensureConfigLoaded();
  var opts = nconf.get('s3');
  var connectionOpts = {};
  var s3Keys = ['key', 'secret', 'bucket', 'region'];

  // Divide connection-specific and general options
  s3Keys.forEach(function(key) {
    connectionOpts[key] = opts[key];
    delete opts[key];
  });

  return gulp.src([
    'dist/scripts/**/*',
    'dist/styles/**/*',
    'dist/index.html'
    ])
    .pipe($.s3(connectionOpts, opts))
  ;
});

// Deploy the index.html to depot
gulp.task('depot', function() {
  ensureConfigLoaded();
  var opts = nconf.get('depot');

  return gulp.src('dist/index.html')
    .pipe($.depot(opts))
    .on('error', function(err) {
      console.error(chalk.red('[depot]' + err));
    })
    .on('data', function(data) {
      console.log(chalk.blue('[depot]' + data));
    })
  ;
});

gulp.task('deploy', function(callback) {
  return runSequence(
    'check-env',
    'build',
    ['s3', 'depot'],
    callback
  );
});

nconf.argv().env();
var configLoaded = false;
var ENV = nconf.get('ENV') || 'dev';

function onError(err, quit) {
  var err = (err && err.message) || err;
  $.util.log($.util.colors.red(err));
  if (quit) {
    throw new Error(err);
  }
}

function ensureConfigLoaded() {
  if (configLoaded) {
    return;
  }
  nconf.file(path.join('deploy', ENV + '.json'));
  configLoaded = true;
}
