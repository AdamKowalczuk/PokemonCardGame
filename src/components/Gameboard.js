import React, { Component } from "react";
import "../styles/Gameboard.css";
export default class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourMana: 1,
      enemyMana: 1,
      maxMana: 1,
      actualCardsNumber: 0,
      cardsInYourHandNumber: 4,
      yourHand: [],
      yourActiveCards: [],
    };

    // this.init();
  }
  componentDidMount() {
    this.init();
  }
  init() {
    let firstCard = this.props.data.yourDeck[0];
    let secondCard = this.props.data.yourDeck[1];
    let thirdCard = this.props.data.yourDeck[2];
    let fourthCard = this.props.data.yourDeck[3];
    let yourHand = [firstCard, secondCard, thirdCard, fourthCard];
    console.log(yourHand);
    this.setState({ yourHand });
  }
  checkCard(card) {
    // for(i=this.state.actualCardsNumber;i<this.state.cardsInYourHandNumber;i++){
    // }
    // if(card.)
    // return card[this.state.cardsInYourHandNumber]
  }
  drawACard(id) {
    let yourHand = [...this.state.yourHand];
    let newCard = { ...this.props.data.yourDeck[id] };
    newCard.inHand = true;
    this.props.data.yourDeck[id].inHand = true;
    console.log(newCard);
    console.log(yourHand.length);
    yourHand[yourHand.length] = newCard;
    this.setState({
      yourHand,
    });
  }

  useCard(card, id) {
    let yourHand = [...this.state.yourHand];
    let yourDeck = [...this.props.data.yourDeck];
    let yourActiveCards = [...this.state.yourActiveCards];
    card.isActive = true;
    yourActiveCards[yourActiveCards.length] = card;
    yourHand.splice(id, 1);
    yourDeck.splice(id, 1);
    this.props.data.yourDeck = yourDeck;
    this.setState({
      yourHand,
      yourActiveCards,
    });
  }
  render() {
    return (
      <>
        <div className="gameboard">
          <div className="enemy-hand row">
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
            <div className="hand-card">enemy-hand-card</div>
          </div>
          <div className="enemy-info row">
            <div className="enemy-cards-number photos">
              <img src={require("../board-images/card.svg")} alt="card" />
              <h3>30</h3>
            </div>
            <div className="enemy-hp photos">
              <img src={require("../board-images/hp.svg")} alt="hp" />
              <br></br>
              <h3>30</h3>
            </div>
            <div className="enemy-avatar photos">
              <img src={this.props.data.avatar2} alt="enemy avatar" />
            </div>
            <div className="enemy-mana">
              <div className="stats-container">
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
              </div>
            </div>
          </div>
          <div className="enemy-side row">
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
            <div className="enemy-side-card">enemy-side-card</div>
          </div>
          <div className="your-side row">
            {this.state.yourActiveCards.map((card, id) => {
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div className="card-icon" value={id}>
                    <p className="mana stats">
                      {this.state.yourActiveCards[id].mana}
                    </p>

                    <img
                      src={this.state.yourActiveCards[id].image}
                      alt="pokemon"
                    />
                    <p className="attack stats">
                      {this.state.yourActiveCards[id].attack}
                    </p>

                    <p className="hp stats">
                      {this.state.yourActiveCards[id].hp}
                    </p>
                  </div>
                </div>
              );
            })}
            <button
              className="hand-card"
              onClick={() => this.drawACard(this.state.yourHand.length)}
            >
              Dobierz
            </button>
          </div>
          <div className="your-info row">
            <div className="your-cards-number photos">
              <img src={require("../board-images/card.svg")} alt="card" />
              <h3>
                {this.props.data.yourDeck.length - this.state.yourHand.length}
              </h3>
            </div>
            <div className="your-hp photos">
              <img src={require("../board-images/hp.svg")} alt="hp" />
              <h3>30</h3>
            </div>
            <div className="your-avatar photos">
              <img src={this.props.data.avatar1} alt="your avatar" />
            </div>
            <div className="your-mana">
              <div className="stats-container">
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
                <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                />
              </div>
            </div>
          </div>
          <div className="your-hand row">
            {this.state.yourHand.map((card, id) => {
              //console.log(this.props.data.yourDeck[id].inHand);
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className="card-icon"
                    value={id}
                    onClick={() => this.useCard(this.state.yourHand[id], id)}
                  >
                    <p className="mana stats">
                      {this.props.data.yourDeck[id].mana}
                    </p>

                    <img
                      src={this.props.data.yourDeck[id].image}
                      alt="pokemon"
                    />
                    <p className="attack stats">
                      {this.props.data.yourDeck[id].attack}
                    </p>

                    <p className="hp stats">
                      {this.props.data.yourDeck[id].hp}
                    </p>
                  </div>
                </div>
              );
              // } else {
              //   return null;
              // }
            })}
          </div>
        </div>
      </>
    );
  }
}
