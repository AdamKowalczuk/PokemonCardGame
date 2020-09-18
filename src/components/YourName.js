import React, { Component } from "react";
import "../styles/YourName.css";
export default class EndFight extends Component {
  state = {
    name: "",
  };
  changeName(e) {
    console.log(this.state.name);

    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="your-name-container">
          <h1>Podaj swoj nick</h1>
          <h2>{this.state.name}</h2>
          {/* <img src={require("../avatars/bear.svg")} alt="player avatar" /> */}
          <input
            type="text"
            onChange={(e) => {
              this.changeName(e);
            }}
          ></input>
          <button
            className="btn save-button"
            onClick={() => {
              this.props.changePage(0);
              this.props.changeName(this.state.name);
            }}
          >
            Zapisz
          </button>
        </div>
      </>
    );
  }
}
