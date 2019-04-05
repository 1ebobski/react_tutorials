import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("app");

class NameForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log({ target: event.target });
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
    console.log(this.imputNode.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            ref={node => (this.imputNode = node)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, rootElement);

module.hot.accept();
