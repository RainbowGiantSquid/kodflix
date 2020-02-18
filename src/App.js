import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Film from "./components/film/Film";
import Menu from "./components/menu/Menu";
import FilmPage from "./components/filmPage/FilmPage";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="appHeader">
              <Route path="/" component={Menu} />
              <h1 className="title">OLDFLIX</h1>
            </header>
            <article className="container">
              <Route exact path="/" component={Film} />
              <Route exact path="/about" />
              <Route exact path="/film/:filmPage" component={FilmPage} />
            </article>
          </div>
        </div>
      </Router>
    );
  }
}
