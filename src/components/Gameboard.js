import React, { Component } from "react";
import "../styles/Gameboard.css";

export default class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourMana: 1,
      enemyMana: 1,
      maxMana: 1,
      yourCardsNumber: 0,
      enemyCardsNumber: 0,
      cardsInYourHandNumber: 4,
      cardsInEnemyHandNumber: 4,
      yourHand: [],
      enemyHand: [],
      yourActiveCards: [],
      enemyActiveCards: [],
      firstPlayerTurn: true,
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
    let enemyfirstCard = this.props.data.enemyDeck[0];
    let enemysecondCard = this.props.data.enemyDeck[1];
    let enemythirdCard = this.props.data.enemyDeck[2];
    let enemyfourthCard = this.props.data.enemyDeck[3];
    let yourHand = [firstCard, secondCard, thirdCard, fourthCard];
    let enemyHand = [
      enemyfirstCard,
      enemysecondCard,
      enemythirdCard,
      enemyfourthCard,
    ];
    this.setState({ yourHand, enemyHand });
  }
  checkCard(card) {
    // for(i=this.state.actualCardsNumber;i<this.state.cardsInYourHandNumber;i++){
    // }
    // if(card.)
    // return card[this.state.cardsInYourHandNumber]
  }

  drawACard(yourID, enemyID) {
    if (this.state.firstPlayerTurn === true) {
      let enemyHand = [...this.state.enemyHand];
      let newCard = { ...this.props.data.enemyDeck[enemyID] };
      if (this.state.enemyHand.length < 8) {
        newCard.inHand = true;
        this.props.data.enemyDeck[enemyID].inHand = true;
        enemyHand[enemyHand.length] = newCard;
      }

      this.setState({
        enemyHand,
        enemyMana: this.state.maxMana,
        firstPlayerTurn: !this.state.firstPlayerTurn,
      });
    } else if (this.state.firstPlayerTurn === false) {
      let yourHand = [...this.state.yourHand];
      let newCard = { ...this.props.data.yourDeck[yourID] };
      if (this.state.yourHand.length < 8) {
        newCard.inHand = true;
        this.props.data.yourDeck[yourID].inHand = true;
        yourHand[yourHand.length] = newCard;
      }

      this.setState({
        yourHand,
        maxMana: this.state.maxMana + 1,
        yourMana: this.state.maxMana + 1,
        firstPlayerTurn: !this.state.firstPlayerTurn,
      });
    }
  }

  useCard(card, id) {
    if (this.state.firstPlayerTurn === true) {
      if (this.state.yourMana >= this.props.data.yourDeck[id].mana) {
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
          yourMana: this.state.yourMana - card.mana,
        });
      } else {
        console.log("Za mało many");
      }
    } else {
      if (this.state.enemyMana >= this.props.data.enemyDeck[id].mana) {
        let enemyHand = [...this.state.enemyHand];
        let enemyDeck = [...this.props.data.enemyDeck];
        let enemyActiveCards = [...this.state.enemyActiveCards];
        card.isActive = true;
        enemyActiveCards[enemyActiveCards.length] = card;
        enemyHand.splice(id, 1);
        enemyDeck.splice(id, 1);
        this.props.data.enemyDeck = enemyDeck;
        this.setState({
          enemyHand,
          enemyActiveCards,
          enemyMana: this.state.enemyMana - card.mana,
        });
      } else {
        console.log("Za mało many");
      }
    }
  }

  render() {
    const manaTable = [];
    for (let i = 0; i < this.state.yourMana; i++) {
      manaTable.push(
        <img
          className="progressBarImage"
          key={i}
          src={require("../board-images/potion.svg")}
          alt="mana"
        />
      );
    }
    const manaTable2 = [];
    for (let i = 0; i < this.state.enemyMana; i++) {
      manaTable2.push(
        <img
          className="progressBarImage"
          key={i}
          src={require("../board-images/potion.svg")}
          alt="mana"
        />
      );
    }

    return (
      <>
        <div className="gameboard">
          <div className="enemy-hand row">
            {this.state.enemyHand.map((card, id) => {
              //console.log(this.props.data.yourDeck[id].inHand);
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className="card-icon"
                    value={id}
                    onClick={() => this.useCard(this.state.enemyHand[id], id)}
                  >
                    <p className="mana stats">
                      {this.props.data.enemyDeck[id].mana}
                    </p>

                    <img
                      src={this.props.data.enemyDeck[id].image}
                      alt="pokemon"
                    />
                    <p className="attack stats">
                      {this.props.data.enemyDeck[id].attack}
                    </p>

                    <p className="hp stats">
                      {this.props.data.enemyDeck[id].hp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="enemy-info row">
            <div className="enemy-cards-number photos">
              <img src={require("../board-images/card.svg")} alt="card" />
              <h3>
                {this.props.data.enemyDeck.length - this.state.enemyHand.length}
              </h3>
            </div>
            <div className="enemy-hp photos">
              <img src={require("../board-images/hp.svg")} alt="hp" />

              <h3>30</h3>
            </div>
            <div className="enemy-avatar photos">
              <img src={this.props.data.avatar2} alt="enemy avatar" />
            </div>
            <div className="enemy-mana">
              <div className="stats-container">{manaTable2}</div>
            </div>
          </div>
          <div className="enemy-side row">
            {this.state.enemyActiveCards.map((card, id) => {
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div className="card-icon" value={id}>
                    <p className="mana stats">
                      {this.state.enemyActiveCards[id].mana}
                    </p>

                    <img
                      src={this.state.enemyActiveCards[id].image}
                      alt="pokemon"
                    />
                    <p className="attack stats">
                      {this.state.enemyActiveCards[id].attack}
                    </p>

                    <p className="hp stats">
                      {this.state.enemyActiveCards[id].hp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="turn-button"
            onClick={() => {
              this.drawACard(
                this.state.yourHand.length,
                this.state.enemyHand.length
              );
            }}
          >
            Dobierz
          </button>
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
                {manaTable}
                {/* <img
                  className="progressBarImage"
                  src={require("../board-images/potion.svg")}
                  alt="mana"
                /> */}
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
            })}
          </div>
        </div>
      </>
    );
  }
}
