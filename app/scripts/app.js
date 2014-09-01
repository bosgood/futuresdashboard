/** @jsx React.DOM */

var $ = require('jquery'),
  React = window.React = require('react'),
  mountNode = document.getElementById('app'),
  FuturesSpec = require('./ui/FuturesSpec'),
  ProductSelection = require('./ui/ProductSelection'),
  futuresSpecs = require('./data/futures_specs'),
  specIndex = {};

futuresSpecs.products.forEach(function(spec) {
  specIndex[spec.id] = spec;
});

var DashboardApp = React.createClass({
  getInitialState: function() {
    return {
      products: futuresSpecs.products,
      selectedProduct: null,
    };
  },
  onProductChanged: function(product) {
    this.setState({ selectedProduct: product });
  },
  getMeta: function() {
    return { selectedProduct: this.state.selectedProduct };
  },
  render: function() {
    return (
      <div>
        <ProductSelection items={this.state.products} onChange={this.onProductChanged} meta={this.getMeta()} />
      </div>
    );
  }
});

React.renderComponent(<DashboardApp />, mountNode);
