import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const rootElement = document.getElementById("app");

class UserCompany extends React.Component {
  state = {
    company: undefined,
    loaded: false
  };

  componentDidMount() {
    axios({
      url: "https://api.github.com/graphql",
      method: "post",
      data: {
        query: `{
          user(login: "${this.props.username}") {
            company
          }
        }`
      },
      headers: {
        Authorization: `bearer fb1c0310b42e6feb939bd5007776d25dc19e8906`
      }
    }).then(response => {
      this.setState({
        company: response.data.data.user.company,
        loaded: true
      });
    });
  }
  render() {
    return this.state.loaded ? this.state.company || "Unknown" : "...";
  }
}

const username = "mzabriskie";
const element = (
  <div>
    <div>
      {`@${username} works at `}
      <UserCompany username={username} />
    </div>
  </div>
);

ReactDOM.render(element, rootElement);

module.hot.accept();
