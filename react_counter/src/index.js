import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const rootElement = document.getElementById("app");

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

const element = <Counter />;

ReactDOM.render(element, rootElement);

module.hot.accept();
