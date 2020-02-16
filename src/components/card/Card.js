import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function FilmCard(props) {
  let filmId = props.title.replace(/\s+/g, "");
  return (
    <Link to={filmId} id={filmId} className='cardOverlay'>
      <h3>{props.title}</h3>
      <p>Rating: {props.rating}</p>
    </Link>
  );
}
export default FilmCard;
