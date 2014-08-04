/** @jsx React.DOM */

var PriceCalculator = require('./PriceCalculator'),
  Calendar = require('./Calendar'),
  PriceUtils = require('../helpers/prices');

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
    var product = this.props.product;
    if (!this.isSelectedProduct()) {
      return (
        <div className="futures-spec" onClick={this.handleClick}>
          <header className="futures-spec-header">
            <h1>{product.tickerSymbol}</h1>
          </header>
        </div>
      );
    } else {
      var minimumFluctuationDollarValue = PriceUtils.getActualValue(
        product, product.minimumFluctuation
      );
      var minimumFluctuationValue = product.minimumFluctuation;
      if (product.priceFormat !== 'decimal') {
        minimumFluctuationValue = PriceUtils.convertDecimalToTicks(
          product, product.minimumFluctuation
        );
      }

      return (
        <div className="futures-spec">
          <header
            className="futures-spec-header"
            onClick={this.handleClick}
          >
            <h1>{product.tickerSymbol}</h1>
          </header>
          <section className="futures-spec-details">
            <dt>Multiplier</dt>
            <dd>{product.multiplier}</dd>
            <dt>Minimum Fluctuation</dt>
            <dd>{minimumFluctuationValue} (${minimumFluctuationDollarValue})</dd>
          </section>

          <PriceCalculator meta={this.props.meta} />
          <Calendar meta={this.props.meta} />
        </div>
      );
    }
  }
});

module.exports = FuturesSpec;
