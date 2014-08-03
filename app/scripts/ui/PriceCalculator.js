/** @jsx React.DOM */

var PriceCalculator = React.createClass({
  getInitialState: function() {
    return { value: 0 };
  },
  getResult: function() {
    return this.state.value * this.props.meta.selectedProduct.multiplier;
  },
  render: function() {
    if (!this.props.meta.selectedProduct) {
      return <div></div>;
    }

    return (
      <div className="price-calculator">
        <header className="price-calculator-header">
          <h2>Pricing</h2>
        </header>
        <input value={this.state.value} />
        <section className="price-calculator-explanation">
          Input * Multiplier = Actual Value
        </section>
        <section className="price-calculator-result">
          {this.getResult()}
        </section>
      </div>
    );
  }
});

module.exports = PriceCalculator;
