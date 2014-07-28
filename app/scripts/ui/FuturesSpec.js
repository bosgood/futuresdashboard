/** @jsx React.DOM */

var FuturesSpec = React.createClass({
  render: function() {
    return (
      <div>
        Symbol: {this.props.tickerSymbol}
      </div>
    );
  }
});

module.exports = FuturesSpec;
