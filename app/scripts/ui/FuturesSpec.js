/** @jsx React.DOM */

var FuturesSpec = React.createClass({
  render: function() {
    return (
      <div>
        <dt>Symbol</dt>
        <dd>{this.props.tickerSymbol}</dd>
        <dt>Multiplier</dt>
        <dd>{this.props.multiplier}</dd>
        <dt>Minimum Fluctuation</dt>
        <dd>{this.props.fluctuation}</dd>
      </div>
    );
  }
});

module.exports = FuturesSpec;
