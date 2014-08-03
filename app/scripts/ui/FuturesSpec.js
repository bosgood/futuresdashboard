/** @jsx React.DOM */

var FuturesSpec = React.createClass({
  handleClick: function() {
    this.props.onClick(this.props.product);
  },
  render: function() {
    if (this.props.meta.selectedProduct !== this.props.product) {
      return (
        <div onClick={this.handleClick}>
          <h1>{this.props.product.tickerSymbol}</h1>
        </div>
      );
    } else {
      return (
        <div class="futures-spec" onClick={this.handleClick}>
          <header class="futures-spec-header">
            <h1>{this.props.product.tickerSymbol}</h1>
          </header>
          <section class="futures-spec-details">
            <dt>Multiplier</dt>
            <dd>{this.props.product.multiplier}</dd>
            <dt>Minimum Fluctuation</dt>
            <dd>{this.props.product.fluctuation}</dd>
          </section>
        </div>
      );
    }
  }
});

module.exports = FuturesSpec;
