/** @jsx React.DOM */

var ProductSelection = React.createClass({
  createItem: function(data) {
    return <option value={data.id}>{data.tickerSymbol} - {data.shortDescription}</option>;
  },
  onChange: function(e) {
    this.props.onChange(e.target.value);
  },
  render: function() {
    return (
      <select ref="selectList" onChange={this.onChange}>
        {this.props.items.map(this.createItem)}
      </select>
    );
  }
});

module.exports = ProductSelection;
