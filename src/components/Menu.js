import React, { Component } from "react";
import "../styles/Menu.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import battle from "../menu-icons/battle.svg";
export default class Gameboard extends Component {
  state = {
    icons: [
      { image: require("../menu-icons/battle.svg") },
      { image: require("../menu-icons/deck.svg") },
      { image: require("../menu-icons/avatar.svg") },
    ],
  };
  render() {
    return (
      <>
        <div class="buttons-container">
          <Link class="start-button" to="/plansza">
            <button type="button" className="menu-button">
              <img
                className="menu-button-image"
                src={this.state.icons[0].image}
                alt="battle"
              />
            </button>
          </Link>
          <Link class="deck-button" to="/talia">
            <button type="button" className="menu-button">
              <img
                className="menu-button-image"
                src={this.state.icons[1].image}
                alt="deck"
              />
            </button>
          </Link>
          <Link class="avatar-button" to="/avatar">
            <button type="button" className="menu-button">
              <img
                className="menu-button-image"
                src={this.state.icons[2].image}
                alt="avatar"
              />
            </button>
          </Link>
        </div>
      </>
    );
  }
}
