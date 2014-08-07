/** @jsx React.DOM */

var FuturesPriceInput = require('./FuturesPriceInput');

class PriceCalculator {
  getInitialState() {
    return { outputValue: 0 };
  }

  getResult(inputValue) {
    return inputValue * this.props.meta.selectedProduct.multiplier;
  }

  handleChange(value) {
    this.setState({
      outputValue: this.getResult(value)
    });
  }

  render() {
    if (!this.props.meta.selectedProduct) {
      return <div></div>;
    }

    return (
      <div className="price-calculator">
        <header className="price-calculator-header">
          <h2>Pricing</h2>
        </header>
        <FuturesPriceInput meta={this.props.meta} onChange={this.handleChange} />
        <section className="price-calculator-explanation">
          Input * Multiplier = Actual Value
        </section>
        <section className="price-calculator-result">
          = {this.state.outputValue}
        </section>
      </div>
    );
  }
}

module.exports = React.createClass(PriceCalculator.prototype);
