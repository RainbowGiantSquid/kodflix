import React from "react";
import "./cover.css";

function FilmCover(props) {
  return (
    <div className='coverImg'>
      <img alt='' src={props.backgroundImg} />
    </div>
  );
}

export default FilmCover;
