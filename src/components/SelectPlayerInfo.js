import React, { Component } from "react";
import "../styles/SelectPlayerInfo.css";
import Avatar from "./Avatar";
import YourName from "./YourName";
export default class EndFight extends Component {
  state = {
    firstOption: false,
    secondOption: false,
  };
  changeOption(message) {
    if (message === "first") {
      this.setState({
        firstOption: true,
      });
    } else if (message === "second") {
      this.setState({
        secondOption: true,
      });
    }
  }
  render() {
    if (this.state.firstOption === true) {
      return (
        <YourName
          changePage={this.props.data.changePage}
          playerName={this.props.data.playerName}
          changeName={this.props.data.changeName}
        />
      );
    }
    if (this.state.secondOption === true) {
      return (
        <Avatar
          avatar1={this.props.data.avatar1}
          avatar2={this.props.data.avatar2}
          changePage={this.props.data.changePage}
          changeAvatar={this.props.data.changeAvatar}

          //   avatar1: this.state.avatar1,
          //               avatar2: this.state.avatar2,
          //               changeAvatar: this.changeAvatar.bind(this),
        />
      );
    }
    return (
      <>
        <div className="select-container">
          <h1>Wybierz opcję</h1>
          <div className="options-box">
            <div className="nick-choose-container">
              <img
                src={require("../avatars/bear.svg")}
                alt="player avatar"
                onClick={() => this.changeOption("first")}
              />
              <h2>Wybierz swój nick</h2>
            </div>

            <div className="nick-choose-container">
              <img
                src={require("../avatars/trump.svg")}
                alt="player avatar"
                onClick={() => this.changeOption("second")}
              />
              <h2>Wybierz swój avatar</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
