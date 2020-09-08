import React from "react";
//import logo from "./logo.svg";
import Gameboard from "./components/Gameboard";
import Deck from "./components/Deck";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={Menu} />
        <Route exact path="/plansza" component={Gameboard} />
        <Route exact path="/talia" component={Deck} />
        {/* <Menu exact path="/" /> */}
        {/* <Gameboard exact path="/plansza" />
        <Deck exact path="/talia" /> */}
      </div>
    </>
  );
}

export default App;
