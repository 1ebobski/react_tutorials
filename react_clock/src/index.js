import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import VanillaTilt from "vanilla-tilt";

const appElement = document.getElementById("app");
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return <div>Current time is: {this.state.date.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<Clock />, appElement);

module.hot.accept();
