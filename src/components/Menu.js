import React, { Component } from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
export default class Menu extends Component {
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
        
        <div className="buttons-container">
          <Link className="start-button" to="/plansza">
            <button type="button" className="menu-button">
              <img
                className="menu-button-image"
                src={this.state.icons[0].image}
                alt="battle"
              />
            </button>
          </Link>
          <Link className="deck-button" to="/talia">
            <button type="button" className="menu-button">
              <img
                className="menu-button-image"
                src={this.state.icons[1].image}
                alt="deck"
              />
            </button>
          </Link>
          <Link className="avatar-button" to="/avatar">
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
