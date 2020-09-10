import React, { Component } from "react";
import "../styles/Gameboard.css";
export default class Gameboard extends Component {
  render() {
    return (
      <>
        <div className="gameboard">
          <button onClick={() => this.props.data.changePage(0)}>Wróć</button>
          <div className="enemy-hand row">
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
            <div className="enemy-hand-card">enemy-hand-card</div>
          </div>
          <div className="enemy-info row">
            <div className="enemy-cards-number">enemy-cards-number</div>
            <div className="enemy-avatar">
              <img src={this.props.data.avatar2} alt="enemy avatar" />
            </div>
            <div className="enemy-mana">enemy-mana</div>
          </div>
          <div className="enemy-side row">
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
          </div>
          <div className="your-side row">
            <div className="your-side-card">your-side-card</div>
            <div className="your-side-card">your-side-card</div>
            <div className="your-side-card">your-side-card</div>
            <div className="your-side-card">your-side-card</div>
            <div className="your-side-card">your-side-card</div>
          </div>
          <div className="your-info row">
            <div className="your-cards-number">your-cards-number</div>
            <div className="your-avatar">
              <img src={this.props.data.avatar1} alt="your avatar" />
            </div>
            <div className="your-mana">your-mana</div>
          </div>
          <div className="your-hand row">
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
            <div className="your-hand-card">your-hand-card</div>
          </div>
        </div>
      </>
    );
  }
}
