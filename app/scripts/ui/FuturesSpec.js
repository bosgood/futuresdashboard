/** @jsx React.DOM */

var FuturesSpec = React.createClass({
  render: function() {
    return (
      <div>
        <dt>Symbol</dt>
        <dd>{this.props.product.tickerSymbol}</dd>
        <dt>Multiplier</dt>
        <dd>{this.props.product.multiplier}</dd>
        <dt>Minimum Fluctuation</dt>
        <dd>{this.props.product.fluctuation}</dd>
      </div>
    );
  }
});

module.exports = FuturesSpec;
