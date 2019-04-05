import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("app");

class NameForm extends React.Component {
  state = {
    error: this.props.getErrorMessage("")
  };
  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.username.value;
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error: ${error}`);
    } else {
      alert(`success: ${value}`);
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      error: this.props.getErrorMessage(value)
    });
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input onChange={this.handleChange} type="text" name="username" />
        </label>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm
    getErrorMessage={value => {
      if (value.length < 3) {
        return `Value must be at least 3 characters, but is only 2`;
      }
      if (!value.includes("s")) {
        return `Value does not include "s" but it should!`;
      }
      return null;
    }}
  />,
  rootElement
);

module.hot.accept();
