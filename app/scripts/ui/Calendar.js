/** @jsx React.DOM */

var Calendar = React.createClass({
  render: function() {
    if (!this.props.meta.selectedProduct) {
      return <div></div>;
    }

    return (
      <div>
      </div>
    );
  }
});

module.exports = Calendar;
