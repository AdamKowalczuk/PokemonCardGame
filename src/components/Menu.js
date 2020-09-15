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
      yourDeck: [
        {
          id: 69,
          name: "bellsprout",
          image: require("../pokemons/bellsprout.svg"),
          mana: 1,
          attack: 1,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 63,
          name: "abra",
          image: require("../pokemons/abra.svg"),
          mana: 3,
          attack: 4,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 142,
          name: "aerodactyl",
          image: require("../pokemons/aerodactyl.svg"),
          mana: 5,
          attack: 6,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 65,
          name: "alakazam",
          image: require("../pokemons/alakazam.svg"),
          mana: 5,
          attack: 7,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 24,
          name: "arbok",
          image: require("../pokemons/arbok.svg"),
          mana: 4,
          attack: 4,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 59,
          name: "arcanine",
          image: require("../pokemons/arcanine.svg"),
          mana: 5,
          attack: 5,
          hp: 6,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 144,
          name: "articuno",
          image: require("../pokemons/articuno.svg"),
          mana: 8,
          attack: 10,
          hp: 7,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 15,
          name: "beedrill",
          image: require("../pokemons/beedrill.svg"),
          mana: 2,
          attack: 3,
          hp: 2,
          inDeck: false,
          availableAttacks: 2,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },

        {
          id: 9,
          name: "blastoise",
          image: require("../pokemons/blastoise.svg"),
          mana: 7,
          attack: 7,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 1,
          name: "bulbasaur",
          image: require("../pokemons/bulbasaur.svg"),
          mana: 3,
          attack: 3,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 12,
          name: "butterfree",
          image: require("../pokemons/butterfree.svg"),
          mana: 2,
          attack: 1,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 10,
          name: "caterpie",
          image: require("../pokemons/caterpie.svg"),
          mana: 1,
          attack: 1,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 113,
          name: "chansey",
          image: require("../pokemons/chansey.svg"),
          mana: 4,
          attack: 2,
          hp: 7,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 6,
          name: "charizard",
          image: require("../pokemons/charizard.svg"),
          mana: 8,
          attack: 9,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 4,
          name: "charmander",
          image: require("../pokemons/charmander.svg"),
          mana: 2,
          attack: 3,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 5,
          name: "charmeleon",
          image: require("../pokemons/charmeleon.svg"),
          mana: 4,
          attack: 5,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 36,
          name: "clefable",
          image: require("../pokemons/clefable.svg"),
          mana: 4,
          attack: 4,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 35,
          name: "clefairy",
          image: require("../pokemons/clefairy.svg"),
          mana: 2,
          attack: 2,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 91,
          name: "cloyster",
          image: require("../pokemons/cloyster.svg"),
          mana: 5,
          attack: 3,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
        {
          id: 104,
          name: "cubone",
          image: require("../pokemons/cubone.svg"),
          mana: 3,
          attack: 4,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "attackEnemyHero", value: 3 }],
        },
      ],
      enemyDeck: [
        {
          id: 69,
          name: "bellsprout",
          image: require("../pokemons/bellsprout.svg"),
          mana: 1,
          attack: 1,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: [{ name: "drawCard", value: 1 }],
        },
        {
          id: 63,
          name: "abra",
          image: require("../pokemons/abra.svg"),
          mana: 3,
          attack: 4,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 142,
          name: "aerodactyl",
          image: require("../pokemons/aerodactyl.svg"),
          mana: 5,
          attack: 6,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 65,
          name: "alakazam",
          image: require("../pokemons/alakazam.svg"),
          mana: 5,
          attack: 7,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 24,
          name: "arbok",
          image: require("../pokemons/arbok.svg"),
          mana: 4,
          attack: 4,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "poison",
        },
        {
          id: 59,
          name: "arcanine",
          image: require("../pokemons/arcanine.svg"),
          mana: 5,
          attack: 5,
          hp: 6,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 144,
          name: "articuno",
          image: require("../pokemons/articuno.svg"),
          mana: 8,
          attack: 10,
          hp: 7,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 15,
          name: "beedrill",
          image: require("../pokemons/beedrill.svg"),
          mana: 2,
          attack: 3,
          hp: 2,
          inDeck: false,
          availableAttacks: 2,
          specialEffect: "",
        },
        {
          id: 69,
          name: "bellsprout",
          image: require("../pokemons/bellsprout.svg"),
          mana: 1,
          attack: 1,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "taunt",
        },
        {
          id: 9,
          name: "blastoise",
          image: require("../pokemons/blastoise.svg"),
          mana: 7,
          attack: 7,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 1,
          name: "bulbasaur",
          image: require("../pokemons/bulbasaur.svg"),
          mana: 3,
          attack: 3,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "addHp",
        },
        {
          id: 12,
          name: "butterfree",
          image: require("../pokemons/butterfree.svg"),
          mana: 2,
          attack: 1,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "Taunt",
        },
        {
          id: 10,
          name: "caterpie",
          image: require("../pokemons/caterpie.svg"),
          mana: 1,
          attack: 1,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 113,
          name: "chansey",
          image: require("../pokemons/chansey.svg"),
          mana: 4,
          attack: 2,
          hp: 7,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "addHp",
        },
        {
          id: 6,
          name: "charizard",
          image: require("../pokemons/charizard.svg"),
          mana: 8,
          attack: 9,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 4,
          name: "charmander",
          image: require("../pokemons/charmander.svg"),
          mana: 2,
          attack: 3,
          hp: 2,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 5,
          name: "charmeleon",
          image: require("../pokemons/charmeleon.svg"),
          mana: 4,
          attack: 5,
          hp: 4,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 36,
          name: "clefable",
          image: require("../pokemons/clefable.svg"),
          mana: 4,
          attack: 4,
          hp: 5,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 35,
          name: "clefairy",
          image: require("../pokemons/clefairy.svg"),
          mana: 2,
          attack: 2,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 91,
          name: "cloyster",
          image: require("../pokemons/cloyster.svg"),
          mana: 5,
          attack: 3,
          hp: 8,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "",
        },
        {
          id: 104,
          name: "cubone",
          image: require("../pokemons/cubone.svg"),
          mana: 3,
          attack: 4,
          hp: 3,
          inDeck: false,
          availableAttacks: 1,
          specialEffect: "addAttack",
        },
      ],
      yourCardNumber: 0,
      enemyCardNumber: 0,
      playerOne: true,
      prevImage: "",
    };
  }
  addToDeck(item) {
    if (this.state.playerOne === true) {
      let yourDeck = [...this.state.yourDeck];
      let yourCard = { ...yourDeck[this.state.yourCardNumber] };
      yourCard = item;
      yourCard.number = this.state.yourCardNumber;
      yourDeck[this.state.yourDeck.length] = yourCard;
      this.setState({
        yourDeck: yourDeck,
        yourCardNumber: this.state.yourCardNumber + 1,
      });
    } else {
      let enemyDeck = [...this.state.enemyDeck];
      let enemyCard = { ...enemyDeck[this.state.enemyCardNumber] };
      enemyCard = item;
      enemyCard.number = this.state.enemyCardNumber;
      enemyDeck[this.state.enemyDeck.length] = enemyCard;
      this.setState({
        enemyDeck: enemyDeck,
        enemyCardNumber: this.state.enemyCardNumber + 1,
      });
    }
  }
  deleteFromDeck(id) {
    if (this.state.playerOne === true) {
      let yourDeck = [...this.state.yourDeck];
      yourDeck.splice(id, 1);
      if (this.state.yourDeck[id + 1] !== undefined) {
        this.setState({
          yourDeck,

          prevImage: this.state.yourDeck[id + 1].image,
        });
      } else {
        this.setState({
          yourDeck,
        });
      }
    } else {
      let enemyDeck = [...this.state.enemyDeck];
      enemyDeck.splice(id, 1);
      this.setState({
        enemyDeck,
      });
    }
  }
  deleteAll() {
    if (this.state.playerOne === true) {
      let yourDeck = [...this.state.yourDeck];
      yourDeck.splice(0, this.state.yourDeck.length);
      this.setState({
        yourDeck,
      });
    } else {
      let enemyDeck = [...this.state.enemyDeck];
      enemyDeck.splice(0, this.state.enemyDeck.length);
      this.setState({
        enemyDeck,
      });
    }
  }
  changeAvatar(item1, item2) {
    this.setState({
      avatar1: item1,
      avatar2: item2,
    });
  }
  deckShuffle(yourDeck, enemyDeck) {
    var i = yourDeck.length,
      j = 0,
      temp,
      temp2;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = yourDeck[i];
      temp2 = enemyDeck[i];
      yourDeck[i] = yourDeck[j];
      yourDeck[j] = temp;
      enemyDeck[i] = enemyDeck[j];
      enemyDeck[j] = temp2;
    }
    return yourDeck;
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
  changePlayer() {
    this.setState({
      playerOne: !this.state.playerOne,
      cards: this.state.cards,
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
                    onClick={() => {
                      this.changePage(1);
                      // this.deckShuffle(
                      //   this.state.yourDeck,
                      //   this.state.enemyDeck
                      // );
                    }}
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
                  yourDeck: this.state.yourDeck,
                  enemyDeck: this.state.enemyDeck,
                }}
              />
            );
          } else if (this.state.pages[2].isOpen === true) {
            return (
              <Deck
                data={{
                  changePage: this.changePage.bind(this),
                  addToDeck: this.addToDeck.bind(this),
                  deleteFromDeck: this.deleteFromDeck.bind(this),
                  deleteAll: this.deleteAll.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                  yourDeck: this.state.yourDeck,
                  enemyDeck: this.state.enemyDeck,
                  playerOne: this.state.playerOne,
                  prevImage: this.state.prevImage,
                }}
              />
            );
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
