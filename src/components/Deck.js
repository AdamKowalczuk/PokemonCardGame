import React, { Component } from "react";
import "../styles/Deck.css";
import "../styles/button.css";
export default class Deck extends Component {
  state = {
    number: 0,
    cards: [
      {
        id: 63,
        name: "abra",
        image: require("../pokemons/abra.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "Hp",
            value: 3,
            description: "Wzmocnij sojuszniczą kartę o 2 punkty życia",
          },
        ],
      },
      {
        id: 142,
        name: "aerodactyl",
        image: require("../pokemons/aerodactyl.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "Heal",
            value: 3,
            description: "Przywróć 3 życia swojemu bohaterowi",
          },
        ],
      },
      {
        id: 65,
        name: "alakazam",
        image: require("../pokemons/alakazam.svg"),
        mana: 5,
        attack: 7,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "Heal",
            value: 3,
            description: "Przywróć 3 życia swojemu bohaterowi",
          },
        ],
      },
      {
        id: 24,
        name: "arbok",
        image: require("../pokemons/arbok.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "Hp",
            value: 3,
            description: "Wzmocnij sojuszniczą kartę o 2 punkty życia",
          },
        ],
      },
      {
        id: 59,
        name: "arcanine",
        image: require("../pokemons/arcanine.svg"),
        mana: 5,
        attack: 5,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "Dmg",
            value: 3,
            description: "Zadaj 3 obrażenie wrogiemu bohaterowi",
          },
        ],
      },
      {
        id: 144,
        name: "articuno",
        image: require("../pokemons/articuno.svg"),
        mana: 8,
        attack: 10,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "Dmg",
            value: 3,
            description: "Zadaj 3 obrażenie wrogiemu bohaterowi",
          },
        ],
      },

      {
        id: 15,
        name: "beedrill",
        image: require("../pokemons/beedrill.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "Dmg",
            value: 3,
            description: "Zadaj 3 obrażenie wrogiemu bohaterowi",
          },
        ],
      },
      {
        id: 69,
        name: "bellsprout",
        image: require("../pokemons/bellsprout.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "Dmg",
            value: 3,
            description: "Zadaj 3 obrażenie wrogiemu bohaterowi",
          },
        ],
      },
      {
        id: 9,
        name: "blastoise",
        image: require("../pokemons/blastoise.svg"),
        mana: 7,
        attack: 7,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 1,
        name: "bulbasaur",
        image: require("../pokemons/bulbasaur.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 12,
        name: "butterfree",
        image: require("../pokemons/butterfree.svg"),
        mana: 2,
        attack: 1,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 10,
        name: "caterpie",
        image: require("../pokemons/caterpie.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 113,
        name: "chansey",
        image: require("../pokemons/chansey.svg"),
        mana: 4,
        attack: 2,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 6,
        name: "charizard",
        image: require("../pokemons/charizard.svg"),
        mana: 8,
        attack: 9,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 4,
        name: "charmander",
        image: require("../pokemons/charmander.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 5,
        name: "charmeleon",
        image: require("../pokemons/charmeleon.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 36,
        name: "clefable",
        image: require("../pokemons/clefable.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 35,
        name: "clefairy",
        image: require("../pokemons/clefairy.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 91,
        name: "cloyster",
        image: require("../pokemons/cloyster.svg"),
        mana: 5,
        attack: 3,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 104,
        name: "cubone",
        image: require("../pokemons/cubone.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 57,
        name: "dewgong",
        image: require("../pokemons/dewgong.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 50,
        name: "diglett",
        image: require("../pokemons/diglett.svg"),
        mana: 1,
        attack: 0,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 132,
        name: "ditto",
        image: require("../pokemons/ditto.svg"),
        mana: 1,
        attack: 0,
        hp: 0,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 65,
        name: "dodrio",
        image: require("../pokemons/dodrio.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 54,
        name: "doduo",
        image: require("../pokemons/doduo.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 148,
        name: "dragonire",
        image: require("../pokemons/dragonire.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 149,
        name: "dragonite",
        image: require("../pokemons/dragonite.svg"),
        mana: 6,
        attack: 5,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 147,
        name: "dratini",
        image: require("../pokemons/dratini.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 96,
        name: "drowzee",
        image: require("../pokemons/drowzee.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 51,
        name: "dugtrio",
        image: require("../pokemons/dugtrio.svg"),
        mana: 3,
        attack: 1,
        hp: 10,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 133,
        name: "eevee",
        image: require("../pokemons/eevee.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },

      {
        id: 23,
        name: "ekans",
        image: require("../pokemons/ekans.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 125,
        name: "electabuzz",
        image: require("../pokemons/electabuzz.svg"),
        mana: 5,
        attack: 7,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 101,
        name: "electrode",
        image: require("../pokemons/electrode.svg"),
        mana: 3,
        attack: 5,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },

      {
        id: 102,
        name: "exeggcute",
        image: require("../pokemons/exeggcute.svg"),
        mana: 2,
        attack: 4,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 103,
        name: "exeggutor",
        image: require("../pokemons/exeggutor.svg"),
        mana: 7,
        attack: 9,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 53,
        name: "farfetch",
        image: require("../pokemons/farfetch.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 22,
        name: "fearow",
        image: require("../pokemons/fearow.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 136,
        name: "flareon",
        image: require("../pokemons/flareon.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 92,
        name: "gastly",
        image: require("../pokemons/gastly.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 94,
        name: "gengar",
        image: require("../pokemons/gengar.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 74,
        name: "geodude",
        image: require("../pokemons/geodude.svg"),
        mana: 3,
        attack: 2,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 44,
        name: "gloom",
        image: require("../pokemons/gloom.svg"),
        mana: 2,
        attack: 1,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 42,
        name: "golbat",
        image: require("../pokemons/golbat.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 118,
        name: "goldeen",
        image: require("../pokemons/goldeen.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 55,
        name: "golduck",
        image: require("../pokemons/golduck.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 76,
        name: "golem",
        image: require("../pokemons/golem.svg"),
        mana: 7,
        attack: 5,
        hp: 10,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 75,
        name: "graveler",
        image: require("../pokemons/graveler.svg"),
        mana: 5,
        attack: 3,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 88,
        name: "grimer",
        image: require("../pokemons/grimer.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 58,
        name: "growlithe",
        image: require("../pokemons/growlithe.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 130,
        name: "gyarados",
        image: require("../pokemons/gyarados.svg"),
        mana: 8,
        attack: 9,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 93,
        name: "haunter",
        image: require("../pokemons/haunter.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 107,
        name: "hitmonchan",
        image: require("../pokemons/hitmonchan.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 106,
        name: "hitmonlee",
        image: require("../pokemons/hitmonlee.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 116,
        name: "horsea",
        image: require("../pokemons/horsea.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 57,
        name: "hypno",
        image: require("../pokemons/hypno.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 2,
        name: "ivysaur",
        image: require("../pokemons/ivysaur.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 39,
        name: "jigglypuff",
        image: require("../pokemons/jigglypuff.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 135,
        name: "jolteon",
        image: require("../pokemons/jolteon.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 124,
        name: "jynx",
        image: require("../pokemons/jynx.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 140,
        name: "kabuto",
        image: require("../pokemons/kabuto.svg"),
        mana: 2,
        attack: 1,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 141,
        name: "kabutops",
        image: require("../pokemons/kabutops.svg"),
        mana: 4,
        attack: 6,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 64,
        name: "kadabra",
        image: require("../pokemons/kadabra.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },

      {
        id: 14,
        name: "kakuna",
        image: require("../pokemons/kakuna.svg"),
        mana: 1,
        attack: 0,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 115,
        name: "kangaskhan",
        image: require("../pokemons/kangaskhan.svg"),
        mana: 5,
        attack: 4,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 99,
        name: "kilnger",
        image: require("../pokemons/kilnger.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 109,
        name: "koffing",
        image: require("../pokemons/koffing.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 98,
        name: "krabby",
        image: require("../pokemons/krabby.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 131,
        name: "lapras",
        image: require("../pokemons/lapras.svg"),
        mana: 5,
        attack: 5,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 108,
        name: "lickitung",
        image: require("../pokemons/lickitung.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 65,
        name: "machamp",
        image: require("../pokemons/machamp.svg"),
        mana: 8,
        attack: 9,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 67,
        name: "machoke",
        image: require("../pokemons/machoke.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 66,
        name: "machop",
        image: require("../pokemons/machop.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 129,
        name: "magikarp",
        image: require("../pokemons/magikarp.svg"),
        mana: 0,
        attack: 0,
        hp: 0,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 126,
        name: "magmar",
        image: require("../pokemons/magmar.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 81,
        name: "magnemite",
        image: require("../pokemons/magnemite.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 82,
        name: "magneton",
        image: require("../pokemons/magneton.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 56,
        name: "mankey",
        image: require("../pokemons/mankey.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 105,
        name: "marowak",
        image: require("../pokemons/marowak.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 52,
        name: "meowth",
        image: require("../pokemons/meowth.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 11,
        name: "metapod",
        image: require("../pokemons/metapod.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 151,
        name: "mew",
        image: require("../pokemons/mew.svg"),
        mana: 6,
        attack: 8,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 150,
        name: "mewtwo",
        image: require("../pokemons/mewtwo.svg"),
        mana: 10,
        attack: 11,
        hp: 10,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 146,
        name: "moltres",
        image: require("../pokemons/moltres.svg"),
        mana: 8,
        attack: 9,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 122,
        name: "mr.mime",
        image: require("../pokemons/mr.mime.svg"),
        mana: 1,
        attack: 0,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 89,
        name: "muk",
        image: require("../pokemons/muk.svg"),
        mana: 5,
        attack: 5,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 34,
        name: "nidoking",
        image: require("../pokemons/nidoking.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 31,
        name: "nidoqueen",
        image: require("../pokemons/nidoqueen.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 29,
        name: "nidoran",
        image: require("../pokemons/nidoran1.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 32,
        name: "nidoran",
        image: require("../pokemons/nidoran2.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 30,
        name: "nidorina",
        image: require("../pokemons/nidorina.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 33,
        name: "nidorino",
        image: require("../pokemons/nidorino.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 38,
        name: "ninetails",
        image: require("../pokemons/ninetails.svg"),
        mana: 5,
        attack: 5,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 43,
        name: "oddish",
        image: require("../pokemons/oddish.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 138,
        name: "omanyte",
        image: require("../pokemons/omanyte.svg"),
        mana: 2,
        attack: 1,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 139,
        name: "omastar",
        image: require("../pokemons/omastar.svg"),
        mana: 4,
        attack: 2,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 95,
        name: "onix",
        image: require("../pokemons/onix.svg"),
        mana: 6,
        attack: 6,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 46,
        name: "paras",
        image: require("../pokemons/paras.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 47,
        name: "parasect",
        image: require("../pokemons/parasect.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 53,
        name: "persian",
        image: require("../pokemons/persian.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 25,
        name: "picachu",
        image: require("../pokemons/picachu.svg"),
        mana: 5,
        attack: 7,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 18,
        name: "pidgeot",
        image: require("../pokemons/pidgeot.svg"),
        mana: 5,
        attack: 5,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 17,
        name: "pidgeotto",
        image: require("../pokemons/pidgeotto.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 16,
        name: "pidgey",
        image: require("../pokemons/pidgey.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 127,
        name: "pinsir",
        image: require("../pokemons/pinsir.svg"),
        mana: 3,
        attack: 6,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 60,
        name: "poliwag",
        image: require("../pokemons/poliwag.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 61,
        name: "poliwhirl",
        image: require("../pokemons/poliwhirl.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 62,
        name: "poliwrath",
        image: require("../pokemons/poliwrath.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 77,
        name: "ponyta",
        image: require("../pokemons/ponyta.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 137,
        name: "porygon",
        image: require("../pokemons/porygon.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 57,
        name: "primeape",
        image: require("../pokemons/primeape.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 54,
        name: "psyduck",
        image: require("../pokemons/psyduck.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 26,
        name: "raichu",
        image: require("../pokemons/raichu.svg"),
        mana: 6,
        attack: 7,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 78,
        name: "rapidash",
        image: require("../pokemons/rapidash.svg"),
        mana: 5,
        attack: 6,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 20,
        name: "raticate",
        image: require("../pokemons/raticate.svg"),
        mana: 3,
        attack: 5,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 19,
        name: "rattata",
        image: require("../pokemons/rattata.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 112,
        name: "rhydon",
        image: require("../pokemons/rhydon.svg"),
        mana: 6,
        attack: 5,
        hp: 8,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 111,
        name: "rhyhorn",
        image: require("../pokemons/rhyhorn.svg"),
        mana: 4,
        attack: 3,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 27,
        name: "sandshrew",
        image: require("../pokemons/sandshrew.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 28,
        name: "sandslash",
        image: require("../pokemons/sandslash.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 123,
        name: "scyther",
        image: require("../pokemons/scyther.svg"),
        mana: 5,
        attack: 7,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 117,
        name: "seadra",
        image: require("../pokemons/seadra.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 119,
        name: "seaking",
        image: require("../pokemons/seaking.svg"),
        mana: 3,
        attack: 4,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 86,
        name: "seel",
        image: require("../pokemons/seel.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 90,
        name: "shellder",
        image: require("../pokemons/shellder.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 79,
        name: "slowpoke",
        image: require("../pokemons/slowpoke.svg"),
        mana: 2,
        attack: 1,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 143,
        name: "snorlax",
        image: require("../pokemons/snorlax.svg"),
        mana: 10,
        attack: 10,
        hp: 11,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 80,
        name: "slowbro",
        image: require("../pokemons/solwbro.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 21,
        name: "spearow",
        image: require("../pokemons/spearow.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 7,
        name: "squirtle",
        image: require("../pokemons/squirtle.svg"),
        mana: 2,
        attack: 2,
        hp: 3,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 121,
        name: "starmie",
        image: require("../pokemons/starmie.svg"),
        mana: 3,
        attack: 2,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 120,
        name: "staryu",
        image: require("../pokemons/staryu.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 114,
        name: "tangela",
        image: require("../pokemons/tangela.svg"),
        mana: 3,
        attack: 5,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 128,
        name: "tauros",
        image: require("../pokemons/tauros.svg"),
        mana: 5,
        attack: 7,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 72,
        name: "tentacool",
        image: require("../pokemons/tentacool.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 73,
        name: "tentacruel",
        image: require("../pokemons/tentacruel.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 134,
        name: "vaporeon",
        image: require("../pokemons/vaporeon.svg"),
        mana: 4,
        attack: 5,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 3,
        name: "venasaur",
        image: require("../pokemons/venasaur.svg"),
        mana: 6,
        attack: 6,
        hp: 7,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 49,
        name: "venomoth",
        image: require("../pokemons/venomoth.svg"),
        mana: 2,
        attack: 1,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 48,
        name: "venonat",
        image: require("../pokemons/venonat.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 71,
        name: "victreebel",
        image: require("../pokemons/victreebel.svg"),
        mana: 4,
        attack: 4,
        hp: 5,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 45,
        name: "vileplume",
        image: require("../pokemons/vileplume.svg"),
        mana: 2,
        attack: 1,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 100,
        name: "voltorb",
        image: require("../pokemons/voltorb.svg"),
        mana: 2,
        attack: 4,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 37,
        name: "vulpix",
        image: require("../pokemons/vulpix.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 8,
        name: "wartortle",
        image: require("../pokemons/wartortle.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 13,
        name: "weedle",
        image: require("../pokemons/weedle.svg"),
        mana: 1,
        attack: 2,
        hp: 1,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },

      {
        id: 70,
        name: "weepinbell",
        image: require("../pokemons/weepinbell.svg"),
        mana: 1,
        attack: 1,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 110,
        name: "weezing",
        image: require("../pokemons/weezing.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },

      {
        id: 40,
        name: "wigglytuff",
        image: require("../pokemons/wigglytuff.svg"),
        mana: 3,
        attack: 3,
        hp: 4,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 145,
        name: "zapdos",
        image: require("../pokemons/zapdos.svg"),
        mana: 7,
        attack: 9,
        hp: 6,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
      {
        id: 41,
        name: "zubat",
        image: require("../pokemons/zubat.svg"),
        mana: 2,
        attack: 3,
        hp: 2,
        inDeck: false,
        specialEffect: [
          {
            name: "",
            value: 0,
            description: "",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <>
        <div className="card-collection">
          {this.state.cards.map((card, id) => {
            return (
              <div value={id} className="card-icon" key={id}>
                <p className="mana stats">{card.mana}</p>
                {(this.props.data.playerOne === true &&
                  this.props.data.yourDeck.length < 20) ||
                (this.props.data.playerOne === false &&
                  this.props.data.enemyDeck.length < 20) ? (
                  <img
                    className="add-card"
                    src={require("../menu-icons/add.svg")}
                    alt="add button"
                    onClick={() => {
                      this.props.data.addToDeck(this.state.cards[id]);
                    }}
                  />
                ) : (
                  <img
                    className="add-card add-card-inActive"
                    src={require("../menu-icons/add.svg")}
                    alt="add button"
                  />
                )}

                <img src={card.image} className="pokemon-image" alt="pokemon" />
                <p className="attack stats">{card.attack}</p>
                <div
                  className={
                    card.specialEffect[0].name === ""
                      ? ""
                      : "special-effect tooltip"
                  }
                >
                  {card.specialEffect[0].name}
                  <span className="tooltiptext">
                    {card.specialEffect[0].description !== ""
                      ? card.specialEffect[0].description
                      : null}
                  </span>
                </div>
                <p className="hp stats">{card.hp}</p>
              </div>
            );
          })}
        </div>
        <div className="your-deck">
          {this.props.data.playerOne ? (
            <>
              <div className="your-deck-header">
                <h2>
                  Gracz 1 <br />
                  {this.props.data.yourDeck.length}/20
                </h2>
                <button
                  className="btn change-player-button"
                  onClick={() => this.props.data.changePlayer()}
                >
                  Zmień gracza
                </button>
              </div>
              <div className="your-deck-cards">
                {this.props.data.yourDeck.map((card, id) => {
                  return (
                    <div className="your-deck-card" key={id}>
                      <div className="image-container">
                        <img
                          src={card.image}
                          onMouseOver={(e) => {
                            this.props.data.prevImage = e.currentTarget.src;

                            e.currentTarget.src = require("../menu-icons/delete.svg");
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.src = this.props.data.prevImage;
                          }}
                          onClick={() => this.props.data.deleteFromDeck(id)}
                          alt="pokemon"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="your-deck-header">
                <h2>
                  Gracz 2 <br />
                  {this.props.data.enemyDeck.length}/20
                </h2>
                <button
                  className="btn change-player-button"
                  onClick={() => this.props.data.changePlayer()}
                >
                  Zmień gracza
                </button>
              </div>
              <div className="your-deck-cards">
                {this.props.data.enemyDeck.map((card, id) => {
                  return (
                    <div className="your-deck-card" key={id}>
                      <div className="image-container">
                        <img
                          src={card.image}
                          onMouseOver={(e) => {
                            this.props.data.prevImage = e.currentTarget.src;

                            e.currentTarget.src = require("../menu-icons/delete.svg");
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.src = this.props.data.prevImage;
                          }}
                          onClick={() => this.props.data.deleteFromDeck(id)}
                          alt="pokemon"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="your-deck-footer">
            {(this.props.data.yourDeck.length === 20 &&
              this.props.data.playerOne === true) ||
            (this.props.data.enemyDeck.length === 20 &&
              this.props.data.playerOne === false) ? (
              <>
                <button
                  className="btn save-button"
                  onClick={() => {
                    this.props.data.changePage(0);
                  }}
                >
                  Zapisz
                </button>
                <button
                  className="btn delete-all-button"
                  onClick={() => this.props.data.deleteAll()}
                >
                  Wyczyść
                </button>
              </>
            ) : (
              <>
                <button className="btn inActive-button">Zapisz</button>
                <button
                  className="btn delete-all-button"
                  onClick={() => this.props.data.deleteAll()}
                >
                  Wyczyść
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
