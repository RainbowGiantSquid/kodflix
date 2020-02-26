import React from "react";
import FilmCover from "../cover/Cover";
import FilmCard from "../card/Card";
import { Link } from "react-router-dom";
import { films } from "../../data";

export default class Film extends React.Component {
  render() {
    return films.map(film => {
      return (
        <Link to={`film/${film.id}`} className="card" key={film.id}>
          <FilmCard title={film.title} rating={film.rating} />
          <FilmCover backgroundImg={film.backgroundImg} />
        </Link>
      );
    });
  }
}
