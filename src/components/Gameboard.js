import React, { Component } from "react";
import "../styles/Gameboard.css";
import "../styles/GameboardCards.css";
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
      isAttackClicked1: false,
      isAttackClicked2: false,
      actualAttack: 0,
      yourHp: 30,
      enemyHp: 30,
      whichElementClicked: "",
      yourAvatarDamaged: "false",
      enemyAvatarDamaged: "false",
      unitDamaged: "false",
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

  changePlayer(yourID, enemyID) {
    if (this.state.firstPlayerTurn === true) {
      this.setState({
        firstPlayerTurn: !this.state.firstPlayerTurn,
      });
    } else {
      this.setState({
        firstPlayerTurn: !this.state.firstPlayerTurn,
      });
    }
  }

  changeMana(yourID, enemyID) {
    if (this.state.firstPlayerTurn === true) {
      this.setState({
        enemyMana: this.state.maxMana,
      });
    } else if (this.state.firstPlayerTurn === false) {
      if (this.state.maxMana === 10) {
        this.setState({
          yourMana: this.state.maxMana,
        });
      } else {
        this.setState({
          maxMana: this.state.maxMana + 1,
          yourMana: this.state.maxMana + 1,
        });
      }
    }
  }
  drawACard(yourID, enemyID, message) {
    if (this.state.firstPlayerTurn === true && message === "normal") {
      let enemyHand = [...this.state.enemyHand];
      let newCard = { ...this.props.data.enemyDeck[enemyID] };

      if (this.state.enemyHand.length < 8) {
        newCard.inHand = true;
        this.props.data.enemyDeck[enemyID].inHand = true;
        enemyHand[enemyHand.length] = newCard;
      }

      this.setState({
        enemyHand,
        // enemyMana: this.state.maxMana,
        // firstPlayerTurn: !this.state.firstPlayerTurn,
      });
    } else if (this.state.firstPlayerTurn === false && message === "normal") {
      let yourHand = [...this.state.yourHand];
      let newCard = { ...this.props.data.yourDeck[yourID] };
      if (this.state.yourHand.length < 8) {
        newCard.inHand = true;
        this.props.data.yourDeck[yourID].inHand = true;
        yourHand[yourHand.length] = newCard;
      }
      this.setState({
        yourHand,
      });
    }
    // else if (
    //   this.state.firstPlayerTurn === false &&
    //   message === "specialEffect"
    // ) {
    //   let enemyHand = [...this.state.enemyHand];
    //   let newCard = { ...this.props.data.enemyDeck[enemyID] };
    //   if (this.state.enemyHand.length < 8) {
    //     newCard.inHand = true;
    //     this.props.data.enemyDeck[enemyID].inHand = true;
    //     enemyHand[enemyHand.length] = newCard;
    //   }

    //   this.setState({
    //     enemyHand,
    //     // enemyMana: this.state.maxMana,
    //     // firstPlayerTurn: !this.state.firstPlayerTurn,
    //   });
    // } else if (
    //   this.state.firstPlayerTurn === true &&
    //   message === "specialEffect"
    // ) {
    //   let yourHand = [...this.state.yourHand];

    //   let newCard = { ...this.props.data.yourDeck[yourID - 1] };
    //   console.log("your hand", yourHand);
    //   console.log("yourId", yourID);
    //   console.log("newCard", newCard);
    //   if (this.state.yourHand.length < 8) {
    //     newCard.inHand = true;
    //     console.log(this.props.data.yourDeck[yourID - 1]);
    //     console.log(yourHand[yourHand.length - 1]);
    //     this.props.data.yourDeck[yourID - 1].inHand = true;
    //     yourHand[yourHand.length - 1] = newCard;
    //   }

    //   this.setState({
    //     yourHand,
    //   });
    // }
  }

  useCard(card, id, player) {
    this.setState({
      isAttackClicked1: false,
      isAttackClicked2: false,
    });
    if (
      this.state.firstPlayerTurn === true &&
      this.state.yourActiveCards.length < 5 &&
      player === "first"
    ) {
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
    } else if (
      this.state.firstPlayerTurn === false &&
      this.state.enemyActiveCards.length < 5 &&
      player === "second"
    ) {
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
  useSpecialEffect(card, id, player) {
    if (card.specialEffect[0].name === "addHp") {
      console.log("Special effect : addHp");
    } else if (card.specialEffect[0].name === "addAttack") {
      console.log("Special effect : addAttack");
    } else if (card.specialEffect[0].name === "attackEnemyHero") {
      console.log("Special effect : attackEnemyHero");
      if (player === true) {
        this.setState({
          enemyHp: this.state.enemyHp - card.specialEffect[0].value,
        });
      } else {
        this.setState({
          yourHp: this.state.yourHp - card.specialEffect[0].value,
        });
      }
    } else if (card.specialEffect[0].name === "poison") {
      console.log("Special effect : poison");
    } else if (card.specialEffect[0].name === "taunt") {
      console.log("Special effect : taunt");
    } else if (card.specialEffect[0].name === "drawCard") {
      console.log("Special effect : drawCard");
      this.drawACard(
        this.state.yourHand.length,
        this.state.enemyHand.length,
        "specialEffect"
      );
    }
  }
  resetAvailableAttacks() {
    this.setState({
      isAttackClicked1: false,
      isAttackClicked2: false,
    });
    if (this.state.firstPlayerTurn === true) {
      let yourActiveCards = [...this.state.yourActiveCards];
      for (let i = 0; i < yourActiveCards.length; i++) {
        yourActiveCards[i].availableAttacks = 1;
      }
      this.setState({
        yourActiveCards,
      });
    } else {
      let enemyActiveCards = [...this.state.enemyActiveCards];
      for (let i = 0; i < enemyActiveCards.length; i++) {
        enemyActiveCards[i].availableAttacks = 1;
      }
      this.setState({
        enemyActiveCards,
      });
    }
  }
  attack(card, id, player) {
    if (player === "first" && card.availableAttacks > 0) {
      let yourActiveCards = [...this.state.yourActiveCards];
      let yourActiveCard = { ...yourActiveCards[id] };
      card.availableAttacks = card.availableAttacks - 1;
      yourActiveCard[id] = card;
      this.setState({
        yourActiveCards,
        isAttackClicked1: true,
        actualAttack: card.attack,
      });
    } else if (player === "second" && card.availableAttacks > 0) {
      let enemyActiveCards = [...this.state.enemyActiveCards];
      let enemyActiveCard = { ...enemyActiveCards[id] };
      card.availableAttacks = card.availableAttacks - 1;
      enemyActiveCard[id] = card;
      this.setState({
        enemyActiveCards,
        isAttackClicked2: true,
        actualAttack: card.attack,
      });
    }
  }
  getDamage(card, id, player, e) {
    // e.currentTarget.color = "red";
    if (player === "first") {
      let yourActiveCards = [...this.state.yourActiveCards];
      let yourActiveCard = { ...yourActiveCards[id] };
      card.hp = card.hp - this.state.actualAttack;
      yourActiveCard[id] = card;
      if (card.hp <= 0) {
        yourActiveCards.splice(id, 1);
      }
      this.setState({
        yourActiveCards,
        actualAttack: 0,
        isAttackClicked2: false,
      });
    } else {
      let enemyActiveCards = [...this.state.enemyActiveCards];
      let enemyActiveCard = { ...enemyActiveCards[id] };
      card.hp = card.hp - this.state.actualAttack;
      enemyActiveCard[id] = card;
      if (card.hp <= 0) {
        enemyActiveCards.splice(id, 1);
      }
      this.setState({
        enemyActiveCards,
        actualAttack: 0,
        isAttackClicked1: false,
      });
    }
  }
  // getDamageAnimation(e) {
  //   console.log("getDamageAnimation");
  //   console.log(e.className);
  //   e.className = "elo";

  //   setInterval(() => {
  //     this.setState({
  //       whichElementClicked: "",
  //     });
  //   }, 5000);
  // }
  avatarGetDamage(player, e) {
    this.setState({
      isAttackClicked1: false,
      isAttackClicked2: false,
    });
    if (player === "first") {
      this.setState({
        yourHp: this.state.yourHp - this.state.actualAttack,
        actualAttack: 0,
      });
    } else if (player === "second") {
      this.setState({
        enemyHp: this.state.enemyHp - this.state.actualAttack,
        actualAttack: 0,
      });
    }
  }
  getDamageAnimation(e) {
    console.log("działa");
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.currentTarget.className);
  }
  render() {
    if (this.state.enemyHp <= 0) {
      alert("Gracz 1 ZWYCIĘŻYŁ!");
    } else if (this.state.yourHp <= 0) {
      alert("Gracz 2 ZWYCIĘŻYŁ!");
    }
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
          <div className="enemy-hand hand">
            {this.state.enemyHand.map((card, id) => {
              //console.log(this.props.data.yourDeck[id].inHand);
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className="card-icon"
                    value={id}
                    onClick={() => {
                      this.useCard(this.state.enemyHand[id], id, "second");
                      this.useSpecialEffect(card, id);
                    }}
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
                    <div
                      className={
                        card.specialEffect[0].name === ""
                          ? ""
                          : "special-effect tooltip"
                      }
                    >
                      <span className="tooltiptext">
                        {card.specialEffect[0].description !== ""
                          ? card.specialEffect[0].description
                          : null}
                      </span>
                    </div>
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

              <h3>{this.state.enemyHp}</h3>
            </div>
            <div
              className={
                this.state.isAttackClicked1
                  ? "enemy-avatar photos border"
                  : "enemy-avatar photos"
              }
            >
              <img
                src={this.props.data.avatar2}
                alt="enemy avatar"
                onClick={
                  this.state.firstPlayerTurn === false
                    ? null
                    : (e) => this.avatarGetDamage("second", e)
                }
              />
            </div>
            <div className="enemy-mana">
              <div className="stats-container">{manaTable2}</div>
            </div>
          </div>
          <div className="enemy-side">
            {this.state.enemyActiveCards.map((card, id) => {
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className={
                      this.state.isAttackClicked1
                        ? "card-icon border"
                        : "card-icon"
                    }
                    value={id}
                    onClick={
                      this.state.firstPlayerTurn === false
                        ? () => this.attack(card, id, "second")
                        : (e) => this.getDamage(card, id, "second", e)
                    }
                  >
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
                    <div
                      className={
                        card.specialEffect[0].name === ""
                          ? ""
                          : "special-effect tooltip"
                      }
                    >
                      <span className="tooltiptext">
                        {card.specialEffect[0].description !== ""
                          ? card.specialEffect[0].description
                          : null}
                      </span>
                    </div>
                    <p className="hp stats">
                      {this.state.enemyActiveCards[id].hp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className={
              this.state.firstPlayerTurn
                ? "btn save-button turn-button your-turn"
                : "btn delete-button turn-button enemy-turn"
            }
            onClick={() => {
              this.drawACard(
                this.state.yourHand.length,
                this.state.enemyHand.length,
                "normal"
              );
              this.resetAvailableAttacks();
              this.changePlayer();
              this.changeMana();
            }}
          >
            {this.state.firstPlayerTurn ? "Twoja tura" : "Tura wroga"}
          </button>
          <div className="your-side">
            {this.state.yourActiveCards.map((card, id) => {
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className={
                      this.state.isAttackClicked2
                        ? "card-icon border"
                        : "card-icon"
                    }
                    value={id}
                    onClick={
                      this.state.firstPlayerTurn === true
                        ? () => this.attack(card, id, "first")
                        : (e) => this.getDamage(card, id, "first", e)
                    }
                    // onChange={(e) => this.getDamageAnimation(e)}
                  >
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
                    <div
                      className={
                        card.specialEffect[0].name === ""
                          ? ""
                          : "special-effect tooltip"
                      }
                    >
                      <span className="tooltiptext">
                        {card.specialEffect[0].description !== ""
                          ? card.specialEffect[0].description
                          : null}
                      </span>
                    </div>
                    <p
                      className="hp stats"
                      // onClick={(e) => this.getDamageAnimation(e)}
                      // className={
                      //   this.state.whichElementClicked === "hp"
                      //     ? "hp stats getDamage"
                      //     : "hp stats"
                      // }
                    >
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
              <h3>{this.state.yourHp}</h3>
            </div>
            <div
              className={
                this.state.isAttackClicked2
                  ? "your-avatar photos border"
                  : "your-avatar photos"
              }
            >
              <img
                src={this.props.data.avatar1}
                alt="your avatar"
                onClick={
                  this.state.firstPlayerTurn === true
                    ? null
                    : (e) => this.avatarGetDamage("first", e)
                }
              />
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
          <div className="your-hand hand">
            {this.state.yourHand.map((card, id) => {
              //console.log(this.props.data.yourDeck[id].inHand);
              // if (this.props.data.yourDeck[id].inHand === true) {
              return (
                <div className="hand-card" key={id}>
                  <div
                    className="card-icon"
                    value={id}
                    onClick={() => {
                      this.useCard(this.state.yourHand[id], id, "first");
                      this.useSpecialEffect(
                        card,
                        id,
                        this.state.firstPlayerTurn
                      );
                    }}
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
                    <div
                      className={
                        card.specialEffect[0].name === ""
                          ? ""
                          : "special-effect tooltip"
                      }
                    >
                      <span className="tooltiptext">
                        {card.specialEffect[0].description !== ""
                          ? card.specialEffect[0].description
                          : null}
                      </span>
                    </div>
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
