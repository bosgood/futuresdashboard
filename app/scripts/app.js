/** @jsx React.DOM */

var React = window.React = require('react'),
  mountNode = document.getElementById('app'),
  FuturesSpec = require('./ui/FuturesSpec'),
  PriceCalculator = require('./ui/PriceCalculator'),
  ProductSelection = require('./ui/ProductSelection'),
  Calendar = require('./ui/Calendar'),
  futuresSpecs = require('./data/futures_specs'),
  defaultProduct = futuresSpecs.products[0];

var DashboardApp = React.createClass({
  render: function() {
    return (
      <div>
        <ProductSelection items={futuresSpecs.products} />
        <FuturesSpec />
        <PriceCalculator />
        <Calendar />
      </div>
    );
  }
});

React.renderComponent(<DashboardApp />, mountNode);
