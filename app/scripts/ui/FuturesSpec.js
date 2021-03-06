/** @jsx React.DOM */

var PriceCalculator = require('./PriceCalculator'),
  Calendar = require('./Calendar'),
  PriceUtils = require('../helpers/prices');

class FuturesSpec {
  handleClick() {
    this.props.onClick(
      this.isSelectedProduct() ? null : this.props.product
    );
  }

  isSelectedProduct() {
    return this.props.meta.selectedProduct === this.props.product;
  }

  render() {
    var product = this.props.product;
    if (!this.isSelectedProduct()) {
      return (
        <div className="futures-spec collapsed" onClick={this.handleClick}>
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
        <div className="futures-spec selected">
          <header
            className="futures-spec-header"
            onClick={this.handleClick}
          >
            <h1>{product.tickerSymbol}</h1>
          </header>
          <dl className="futures-spec-details dl-horizontal">
            <dt className="text-muted">Description</dt>
            <dd>{product.shortDescription}</dd>
            <dt className="text-muted">Multiplier</dt>
            <dd>{product.multiplier}</dd>
            <dt className="text-muted">Minimum Fluctuation</dt>
            <dd>{minimumFluctuationValue} (${minimumFluctuationDollarValue})</dd>
            <dt className="text-muted">Settlement Type</dt>
            <dd>{product.settlementType}</dd>
            <dt className="text-muted">Contract Unit</dt>
            <dd>{product.contractUnit}</dd>

          </dl>

          <PriceCalculator meta={this.props.meta} />
          <Calendar meta={this.props.meta} />
        </div>
      );
    }
  }
}

module.exports = React.createClass(FuturesSpec.prototype);
