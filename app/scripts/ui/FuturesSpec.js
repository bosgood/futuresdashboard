/** @jsx React.DOM */

var FuturesSpec = React.createClass({
  handleClick: function() {
    this.props.onClick(
      this.isSelectedProduct() ? null : this.props.product
    );
  },
  isSelectedProduct: function() {
    return this.props.meta.selectedProduct === this.props.product;
  },
  render: function() {
    if (!this.isSelectedProduct()) {
      return (
        <div className="futures-spec" onClick={this.handleClick}>
          <header className="futures-spec-header">
            <h1>{this.props.product.tickerSymbol}</h1>
          </header>
        </div>
      );
    } else {
      return (
        <div className="futures-spec" onClick={this.handleClick}>
          <header className="futures-spec-header">
            <h1>{this.props.product.tickerSymbol}</h1>
          </header>
          <section className="futures-spec-details">
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
