import React, { Component } from "react";
import logo from "./logo.svg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default HomePage;
