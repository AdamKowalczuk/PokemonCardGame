import React, { Component } from "react";
import "../styles/EndFight.css";
export default class EndFight extends Component {
  render() {
    return (
      <>
        <div className="end-fight-container">
          <h1>Gracz {this.props.player} zwyciężył</h1>
          <img
            className="crown-image"
            src={require("../board-images/crown.svg")}
            alt="crown"
          />
          <img className="winner-image" src={this.props.image} alt="" />
          {this.props.image.avatar1}
          <button
            className="btn change-player-button"
            onClick={() => {
              this.props.changePage(0);
            }}
          >
            Przejdź do menu
          </button>
        </div>
      </>
    );
  }
}
