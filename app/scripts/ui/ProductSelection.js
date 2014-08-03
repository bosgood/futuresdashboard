/** @jsx React.DOM */

var FuturesSpec = require('./FuturesSpec');

var ProductSelection = React.createClass({
  createItem: function(data) {
    return (
      <FuturesSpec
        key={data.id}
        product={data}
        meta={this.props.meta}
        onClick={this.handleClick} />
    );
  },
  handleClick: function(data) {
    this.props.onChange(data);
  },
  render: function() {
    return (
      <div>
        {this.props.items.map(this.createItem)}
      </div>
    );
  }
});

module.exports = ProductSelection;
