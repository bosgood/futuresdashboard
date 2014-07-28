/** @jsx React.DOM */

var React = window.React = require('react'),
  mountNode = document.getElementById('app'),
  FuturesSpec = require('./ui/FuturesSpec'),
  PriceCalculator = require('./ui/PriceCalculator'),
  ProductSelection = require('./ui/ProductSelection'),
  Calendar = require('./ui/Calendar'),
  futuresSpecs = require('./data/futures_specs'),
  specIndex = {};

futuresSpecs.products.forEach(function(spec) {
  specIndex[spec.id] = spec;
});

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      products: futuresSpecs.products,
      selectedProduct: futuresSpecs.products[0],
    };
  },
  onProductChanged: function(productId) {
    this.setState({ selectedProduct: specIndex[productId] });
  },
  render: function() {
    return (
      <div>
        <ProductSelection items={this.state.products} onChange={this.onProductChanged} />
        <FuturesSpec product={this.state.selectedProduct} />
        <PriceCalculator />
        <Calendar />
      </div>
    );
  }
});

React.renderComponent(<DashboardApp />, mountNode);
