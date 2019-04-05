import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const rootElement = document.getElementById("app");

class StopWatch extends React.Component {
  state = {
    lapse: 0,
    running: false
  };

  handleRunCLick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({ lapse: Date.now() - startTime });
        });
      }
      return { running: !state.running };
    });
  };

  handleClearCLick = () => {
    clearInterval(this.timer);
    this.setState({
      lapse: 0
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    //Style elements
    const buttonStyles = {
      border: "1px solid grey",
      height: 50,
      width: 100,
      backgroundColor: "#fefefe",
      fontSize: 20,
      margin: 10,
      borderRadius: 5
    };

    const timerStyles = {
      fontSize: 50
    };

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    //Destructuring state
    const { lapse, running } = this.state;

    return (
      <div style={containerStyle}>
        <label style={timerStyles}>{lapse}ms</label>
        <button onClick={this.handleRunCLick} style={buttonStyles}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleClearCLick} style={buttonStyles}>
          Clear
        </button>
      </div>
    );
  }
}

const element = <StopWatch />;

ReactDOM.render(element, rootElement);

module.hot.accept();
