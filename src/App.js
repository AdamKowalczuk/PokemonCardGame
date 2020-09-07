import React from "react";
//import logo from "./logo.svg";
import Gameboard from "./components/Gameboard";
import Deck from "./components/Deck";
import { Router } from "@reach/router";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Gameboard exact path="/plansza" />
          <Deck exact path="/" />
        </Router>
      </div>
    </>
  );
}

export default App;
