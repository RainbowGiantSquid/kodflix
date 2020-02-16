import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Film from "./components/film/Film";
import Fruit from "./components/fruits/Fruits";
import Menu from "./components/menu/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <header className="appHeader">
            <Route path="/" component={Menu} />
            <h1 className="title">OLDFLIX</h1>
            {/* <Fruit /> */}
          </header>
          <article className="container">
            <Route exact path="/" component={Film} />
            {/* <Route exact path={filmId} component={Film} /> */}
          </article>
        </div>
      </div>
    </Router>
  );
}
export default App;
