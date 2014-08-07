/** @jsx React.DOM */

var FuturesSpec = require('./FuturesSpec');

class ProductSelection {
  createItem(data) {
    return (
      <FuturesSpec
        key={data.id}
        product={data}
        meta={this.props.meta}
        onClick={this.handleClick} />
    );
  }

  handleClick(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div>
        {this.props.items.map(this.createItem)}
      </div>
    );
  }
}

module.exports = React.createClass(ProductSelection.prototype);
