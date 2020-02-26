import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
              <Route path="/">
                <Menu />
              </Route>

              <h1 className="title">OLDFLIX</h1>
            </header>
            <article className="container">
              <Route exact path="/">
                <Film />
              </Route>

              <Route exact path="/about">
                <div>This is the about page</div>
              </Route>

              <Route exact path="/film/:filmPage">
                <FilmPage />
              </Route>
            </article>
          </div>
        </div>
      </Router>
    );
  }
}
