import React, { Component } from "react";
import "../styles/Menu.css";
import Gameboard from "./Gameboard";
import Deck from "./Deck";
import Avatar from "./Avatar";
export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        { image: require("../menu-icons/battle.svg") },
        { image: require("../menu-icons/deck.svg") },
        { image: require("../menu-icons/avatar.svg") },
      ],

      avatar1: "/static/media/snorlax.72d11d3c.svg",
      avatar2: "/static/media/psyduck.400d13ce.svg",
      pages: [
        { isOpen: true },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
      ],
      prevPage: 0,
    };
  }
  changeAvatar(item1, item2) {
    this.setState({
      avatar1: item1,
      avatar2: item2,
    });
  }
  changePage(number) {
    let pages = [...this.state.pages];
    let page = { ...pages[number] };
    page.isOpen = true;
    pages[number] = page;

    pages[this.state.prevPage].isOpen = false;

    this.setState({
      pages,
      prevPage: number,
    });
  }

  render() {
    return (
      <>
        {(() => {
          if (this.state.pages[0].isOpen === true) {
            return (
              <div className="buttons-container">
                <div className="start-button">
                  <button
                    type="button"
                    className="menu-button"
                    onClick={() => this.changePage(1)}
                  >
                    <img
                      className="menu-button-image"
                      src={this.state.icons[0].image}
                      alt="battle"
                    />
                  </button>
                </div>
                <div className="deck-button">
                  <button
                    type="button"
                    className="menu-button"
                    onClick={() => this.changePage(2)}
                  >
                    <img
                      className="menu-button-image"
                      src={this.state.icons[1].image}
                      alt="deck"
                    />
                  </button>
                </div>

                <div className="avatar-button">
                  <button
                    type="button"
                    className="menu-button"
                    onClick={() => this.changePage(3)}
                  >
                    <img
                      className="menu-button-image"
                      src={this.state.icons[2].image}
                      alt="avatar"
                    />
                  </button>
                </div>
              </div>
            );
          } else if (this.state.pages[1].isOpen === true) {
            return (
              <Gameboard
                data={{
                  avatar1: this.state.avatar1,
                  avatar2: this.state.avatar2,
                  changePage: this.changePage.bind(this),
                }}
              />
            );
          } else if (this.state.pages[2].isOpen === true) {
            return <Deck />;
          } else if (this.state.pages[3].isOpen === true) {
            return (
              <Avatar
                data={{
                  avatar1: this.state.avatar1,
                  avatar2: this.state.avatar2,
                  changeAvatar: this.changeAvatar.bind(this),
                  changePage: this.changePage.bind(this),
                  pages: this.state.pages,
                }}
              />
            );
          }
        })()}
      </>
    );
  }
}
