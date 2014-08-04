/** @jsx React.DOM */

var PriceCalculator = React.createClass({
  getInitialState: function() {
    return { outputValue: 0 };
  },
  getResult: function(inputValue) {
    return inputValue * this.props.meta.selectedProduct.multiplier;
  },
  handleChange: function(e) {
    this.setState({
      outputValue: this.getResult(e.target.value)
    });
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
        <input type="text" defaultValue={0} onChange={this.handleChange} />
        <section className="price-calculator-explanation">
          Input * Multiplier = Actual Value
        </section>
        <section className="price-calculator-result">
          = {this.state.outputValue}
        </section>
      </div>
    );
  }
});

module.exports = PriceCalculator;
