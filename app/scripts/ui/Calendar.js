/** @jsx React.DOM */

class Calendar {
  render() {
    if (!this.props.meta.selectedProduct) {
      return <div></div>;
    }

    return (
      <div>
      </div>
    );
  }
}

module.exports = React.createClass(Calendar.prototype);
