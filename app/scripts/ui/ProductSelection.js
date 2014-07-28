/** @jsx React.DOM */

var ProductSelection = React.createClass({
  createItem: function(data) {
    return <option>{data.tickerSymbol} - {data.shortDescription}</option>;
  },
  render: function() {
    return (
      <select>
        {this.props.items.map(this.createItem)}
      </select>
    );
  }
});

module.exports = ProductSelection;
