import React, { Component } from "react";
import logo from "./logo.svg";
import NavbarBox from "./components/navbar";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarBox />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </React.Fragment>
    );
  }
}

export default HomePage;
