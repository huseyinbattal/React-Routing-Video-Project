import React, { Component } from "react";
import Menu from "./Menu";

export default class App extends Component {
  render() {
    return (
      <div className="card">
        <h1>Video Player</h1>
        <Menu />
      </div>
    );
  }
}
