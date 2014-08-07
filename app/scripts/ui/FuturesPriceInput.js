/** @jsx React.DOM */

class FuturesPriceInput {
  handleChange(e) {
    typeof this.props.onChange === 'function' && this.props.onChange(e.target.value);
  }

  getInputPattern() {
    var product = this.props.meta.selectedProduct;
    if (product.priceFormat !== 'ticks') {
      return null;
    }

    return "\d\d'\d\d";
  }

  getPlaceholder() {
    var product = this.props.meta.selectedProduct,
      placeholderPrefix = 'price, e.g. ',
      valueString;

    if (product.priceFormat !== 'ticks') {
      valueString = '100.00';
    }
    valueString = "100'00";
    return `${placeholderPrefix} ${valueString}`;
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.getPlaceholder()}
        pattern={this.getInputPattern()}
        onChange={this.handleChange} />
    );
  }
}

module.exports = React.createClass(FuturesPriceInput.prototype);
