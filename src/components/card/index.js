import React from "react";
import "./card.css";

function FilmCard(props) {
  return (
    <div className='cardOverlay'>
      <h3>{props.title}</h3>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default FilmCard;
