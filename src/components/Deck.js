import React, { Component } from "react";
import "../styles/Deck.css";
export default class Deck extends Component {
  state = {
    number: 0,
    cards: [
      {
        id: 1,
        name: "abra",
        image: require("../pokemons/abra.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "aerodactyl",
        image: require("../pokemons/aerodactyl.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "alakazam",
        image: require("../pokemons/alakazam.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "arbok",
        image: require("../pokemons/arbok.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "arcanine",
        image: require("../pokemons/arcanine.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "articuno",
        image: require("../pokemons/articuno.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "beedrill",
        image: require("../pokemons/beedrill.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "bellsprout",
        image: require("../pokemons/bellsprout.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "blastoise",
        image: require("../pokemons/blastoise.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "bulbasaur",
        image: require("../pokemons/bulbasaur.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "butterfree",
        image: require("../pokemons/butterfree.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "caterpie",
        image: require("../pokemons/caterpie.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "chansey",
        image: require("../pokemons/chansey.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "charizard",
        image: require("../pokemons/charizard.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "charmander",
        image: require("../pokemons/charmander.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "charmeleon",
        image: require("../pokemons/charmeleon.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "clefable",
        image: require("../pokemons/clefable.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "clefairy",
        image: require("../pokemons/clefairy.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "cloyster",
        image: require("../pokemons/cloyster.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "cubone",
        image: require("../pokemons/cubone.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dewgong",
        image: require("../pokemons/dewgong.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "diglett",
        image: require("../pokemons/diglett.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "ditto",
        image: require("../pokemons/ditto.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dodrio",
        image: require("../pokemons/dodrio.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "doduo",
        image: require("../pokemons/doduo.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dragonire",
        image: require("../pokemons/dragonire.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dragonite",
        image: require("../pokemons/dragonite.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dratini",
        image: require("../pokemons/dratini.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "drowzee",
        image: require("../pokemons/drowzee.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "dugtrio",
        image: require("../pokemons/dugtrio.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "eevee",
        image: require("../pokemons/eevee.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },

      {
        id: 1,
        name: "ekans",
        image: require("../pokemons/ekans.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "electabuzz",
        image: require("../pokemons/electabuzz.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "electrode",
        image: require("../pokemons/electrode.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },

      {
        id: 1,
        name: "exeggcute",
        image: require("../pokemons/exeggcute.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "exeggutor",
        image: require("../pokemons/exeggutor.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "farfetch",
        image: require("../pokemons/farfetch.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "fearow",
        image: require("../pokemons/fearow.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "flareon",
        image: require("../pokemons/flareon.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "gastly",
        image: require("../pokemons/gastly.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "gengar",
        image: require("../pokemons/gengar.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "geodude",
        image: require("../pokemons/geodude.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "gloom",
        image: require("../pokemons/gloom.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "golbat",
        image: require("../pokemons/golbat.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "goldeen",
        image: require("../pokemons/goldeen.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "golduck",
        image: require("../pokemons/golduck.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "golem",
        image: require("../pokemons/golem.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "graveler",
        image: require("../pokemons/graveler.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "grimer",
        image: require("../pokemons/grimer.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "growlithe",
        image: require("../pokemons/growlithe.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "gyarados",
        image: require("../pokemons/gyarados.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "haunter",
        image: require("../pokemons/haunter.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "hitmonchan",
        image: require("../pokemons/hitmonchan.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "hitmonlee",
        image: require("../pokemons/hitmonlee.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "horsea",
        image: require("../pokemons/horsea.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "hypno",
        image: require("../pokemons/hypno.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "ivysaur",
        image: require("../pokemons/ivysaur.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "jigglypuff",
        image: require("../pokemons/jigglypuff.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "jolteon",
        image: require("../pokemons/jolteon.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "jynx",
        image: require("../pokemons/jynx.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "kabuto",
        image: require("../pokemons/kabuto.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "kabutops",
        image: require("../pokemons/kabutops.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },
      {
        id: 1,
        name: "kadabra",
        image: require("../pokemons/kadabra.svg"),
        mana: 1,
        attack: 1,
        hp: 1,
        inDeck: false,
      },

      {
        id: 6,
        name: "kakuna",
        image: require("../pokemons/kakuna.svg"),
        mana: 7,
        attack: 7,
        hp: 8,
        inDeck: false,
      },
      {
        id: 41,
        name: "kangaskhan",
        image: require("../pokemons/kangaskhan.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
      },
      {
        id: 145,
        name: "kilnger",
        image: require("../pokemons/kilnger.svg"),
        mana: 6,
        attack: 8,
        hp: 5,
        inDeck: false,
      },
      {
        id: 110,
        name: "koffing",
        image: require("../pokemons/koffing.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
      },
    ],
  };
  handleDoubleClick = (id) => {
    let cards = [...this.state.cards];
    let card = { ...cards[id] };
    if (card.inDeck === false) {
      this.setState({
        number: this.state.number + 1,
      });
    }
    card.inDeck = true;
    cards[id] = card;
    this.setState({
      cards,
    });
  };
  handleDelete = (id) => {
    let cards = [...this.state.cards];
    let card = { ...cards[id] };
    card.inDeck = false;
    cards[id] = card;
    this.setState({
      cards,
      number: this.state.number - 1,
    });
  };
  render() {
    return (
      <>
        <div className="card-collection">
          {this.state.cards.map((card, id) => {
            return (
              <div
                value={id}
                className="card-icon"
                key={id}
                onDoubleClick={() => this.handleDoubleClick(id)}
              >
                <p className="mana">Mana:{card.mana}</p>
                <img src={card.image} alt="pokemon" />
                <p className="attack">Atak:{card.attack}</p>
                <p className="hp">Życie:{card.hp}</p>
              </div>
            );
          })}
        </div>
        <div className="your-deck">
          <div className="your-deck-header">
            <h2>Twoja talia {this.state.number}/20</h2>
          </div>

          <div className="your-deck-cards">
            {this.state.cards.map((card, id) => {
              return this.state.cards[id].inDeck ? (
                <div className="your-deck-card" key={id}>
                  {this.state.cards[id].name}
                  <img src={card.image} alt="pokemon" />
                  <button onClick={() => this.handleDelete(id)}>Usuń</button>
                </div>
              ) : null;
            })}
          </div>
          <div className="your-deck-footer">
            {this.state.number === 20 ? (
              <>
                <button className="unlocked">Stwórz</button>
                <button className="unlocked">Wyczyść</button>
              </>
            ) : (
              <>
                <button className="locked">Stwórz</button>
                <button className="locked">Wyczyść</button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
