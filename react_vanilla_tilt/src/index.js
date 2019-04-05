import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import VanillaTilt from "vanilla-tilt";

const rootElement = document.getElementById("app");

class Tilt extends React.Component {
  componentDidMount() {
    console.log(this.rootNode);
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
  }

  render() {
    return (
      <div ref={node => (this.rootNode = node)} className="tilt-root">
        <div className="tilt-child">
          <div {...this.props} />
        </div>
      </div>
    );
  }
}

const element = (
  <div className="totally-centered">
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  </div>
);

ReactDOM.render(element, rootElement);

module.hot.accept();
