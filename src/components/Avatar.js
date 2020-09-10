import React, { Component } from "react";
import "../styles/Avatar.css";
export const MContext = React.createContext();

export default class Avatar extends Component {
  state = {
    previous1: -1,
    previous2: -1,
    choosen1: {},
    choosen2: {},
    currentPlayer: 1,
    avatars: [
      {
        id: 1,
        image: require("../avatars/abra.svg"),
        color: "#dacdbe",
      },
      {
        id: 2,
        image: require("../avatars/bellsprout.svg"),
        color: "#dacdbe",
      },
      {
        id: 3,
        image: require("../avatars/bulbasaur.svg"),
        color: "#dacdbe",
      },
      {
        id: 4,
        image: require("../avatars/caterpie.svg"),
        color: "#dacdbe",
      },
      {
        id: 5,
        image: require("../avatars/charmander.svg"),
        color: "#dacdbe",
      },
      {
        id: 6,
        image: require("../avatars/dratini.svg"),
        color: "#dacdbe",
      },
      {
        id: 7,
        image: require("../avatars/eevee.svg"),
        color: "#dacdbe",
      },
      {
        id: 8,
        image: require("../avatars/jigglypuff.svg"),
        color: "#dacdbe",
      },
      {
        id: 9,
        image: require("../avatars/mankey.svg"),
        color: "#dacdbe",
      },
      {
        id: 10,
        image: require("../avatars/meowth.svg"),
        color: "#dacdbe",
      },
      {
        id: 11,
        image: require("../avatars/mew.svg"),
        color: "#dacdbe",
      },
      {
        id: 12,
        image: require("../avatars/pidgey.svg"),
        color: "#dacdbe",
      },
      {
        id: 13,
        image: require("../avatars/pikachu.svg"),
        color: "#dacdbe",
      },
      {
        id: 14,
        image: require("../avatars/psyduck.svg"),
        color: "#dacdbe",
      },
      {
        id: 15,
        image: require("../avatars/rattata.svg"),
        color: "#dacdbe",
      },
      {
        id: 16,
        image: require("../avatars/snorlax.svg"),
        color: "#dacdbe",
      },
      {
        id: 17,
        image: require("../avatars/squirtle.svg"),
        color: "#dacdbe",
      },
      {
        id: 18,
        image: require("../avatars/venonat.svg"),
        color: "#dacdbe",
      },
      {
        id: 19,
        image: require("../avatars/weedle.svg"),
        color: "#dacdbe",
      },
      {
        id: 20,
        image: require("../avatars/zubat.svg"),
        color: "#dacdbe",
      },
    ],
  };
  handleAvatarClick = (id, e) => {
    if (this.state.previous1 !== -1) {
      let avatars = [...this.state.avatars];
      let prevAvatar = { ...avatars[this.state.previous1] };
      prevAvatar.color = "#dacdbe";
      avatars[this.state.previous1] = prevAvatar;
    }
    if (this.state.currentPlayer === 1) {
      let avatars = [...this.state.avatars];
      let avatar = { ...avatars[id] };
      avatar.color = "green";
      avatars[id] = avatar;
      let prevAvatar = { ...avatars[this.state.previous1] };
      prevAvatar.color = "#dacdbe";
      avatars[this.state.previous1] = prevAvatar;
      this.setState({
        avatars,
        choosen1: this.state.avatars[id],
        color: "green",
        previous1: id,
        currentPlayer: 2,
      });
    } else if (this.state.currentPlayer === 2) {
      let avatars = [...this.state.avatars];
      let avatar = { ...avatars[id] };
      avatar.color = "blue";
      avatars[id] = avatar;
      let prevAvatar = { ...avatars[this.state.previous2] };
      prevAvatar.color = "#dacdbe";
      avatars[this.state.previous2] = prevAvatar;
      this.setState({
        avatars,
        choosen2: this.state.avatars[id],
        color: "blue",
        previous2: id,
        currentPlayer: 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="avatars-container">
          <h1 className="avatar-header">Wybierz swój avatar</h1>
          {this.state.avatars.map((avatar, id) => {
            return (
              <div
                className="avatar-image"
                style={{ backgroundColor: this.state.avatars[id].color }}
                key={id}
                value={id}
                onClick={(e) => this.handleAvatarClick(id, e)}
              >
                <img src={avatar.image} alt="avatar" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
