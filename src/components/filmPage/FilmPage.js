import React, { Component } from "react";
// import Film from "../film/Film";
import { films } from "../../data";

export default class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFilm: ""
    };
  }

  componentDidMount() {
    const filmPage = window.location.pathname;
    let chosenFilm = films.find(film => "/film/" + film.id === filmPage);
    this.setState({
      chosenFilm: chosenFilm
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.chosenFilm.title}</h1>
        <iframe
          title={this.state.chosenFilm.id}
          width="560"
          height="315"
          src={this.state.chosenFilm.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sameSite="None"
        ></iframe>
      </div>
    );
  }
}
