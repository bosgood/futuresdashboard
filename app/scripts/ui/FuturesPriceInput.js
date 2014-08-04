/** @jsx React.DOM */

var FuturesPriceInput = React.createClass({
  handleChange: function(e) {
    typeof this.props.onChange === 'function' && this.props.onChange(e.target.value);
  },
  getInputPattern: function() {
    var product = this.props.meta.selectedProduct;
    if (product.priceFormat !== 'ticks') {
      return null;
    }

    return "\d\d'\d\d";
  },
  getPlaceholder: function() {
    var product = this.props.meta.selectedProduct;
    var placeholderPrefix = 'price, e.g. ';
    if (product.priceFormat !== 'ticks') {
      return `${placeholderPrefix} 100.00`;
    }
    return `${placeholderPrefix} 100'00`;
  },
  render: function() {
    return (
      <input
        type="text"
        placeholder={this.getPlaceholder()}
        pattern={this.getInputPattern()}
        onChange={this.handleChange} />
    );
  }
});

module.exports = FuturesPriceInput;
