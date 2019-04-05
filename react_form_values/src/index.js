import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("app");

class App extends React.Component {
  static allItems = [
    { id: "a", value: "apple" },
    { id: "o", value: "orange" },
    { id: "g", value: "grape" },
    { id: "p", value: "pear" }
  ];

  state = { items: [] };

  addItem = () => {
    this.setState(({ items }) => ({
      items: [...items, App.allItems.find(i => !items.includes(i))]
    }));
  };

  removeItem = item => {
    this.setState(({ items }) => ({
      items: items.filter(i => i !== item)
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <button
          disabled={items.length >= App.allItems.length}
          onClick={this.addItem}>
          +
        </button>
        {items.map((i, index) => (
          <div key={i.id}>
            <button onClick={() => this.removeItem(i)}>-</button>
            {i.value}:
            <input />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);

module.hot.accept();
