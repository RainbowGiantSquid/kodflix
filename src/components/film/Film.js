import React from "react";
import FilmCover from "../cover/Cover";
import FilmCard from "../card/Card";
import Img from "../img/stalker.jpg";
import Img1 from "../img/8_half.png";
import Img2 from "../img/cranes-are-flying.jpg";
import Img3 from "../img/ashes_and_diamonds.jpg";
import Img4 from "../img/Innocent_Sorcerers.jpg";
import Img5 from "../img/bande_a_part.jpg";
import Img6 from "../img/mephisto.jpg";
import Img7 from "../img/la-dolce.jpg";
import Img8 from "../img/one_flew.jpg";
import Img9 from "../img/the_mirror.jpg";
import Img10 from "../img/vive-sa-vie.jpg";
import Img11 from "../img/un_light.jpg";
import Img12 from "../img/seventh_seal.jpg";
import { Link } from "react-router-dom";

const films = [
  {
    title: "Stalker",
    id: "stalker",
    rating: 8.9,
    backgroundImg: Img
  },
  {
    title: "Eight and a half",
    id: "eight-and-half",
    rating: 9.2,
    backgroundImg: Img1
  },
  {
    title: "Cranes are flying",
    id: "cranes-are-flying",
    rating: 7.4,
    backgroundImg: Img2
  },
  {
    title: "Ashes and diamonds",
    id: "ashes-and-diamonds",
    rating: 9.1,
    backgroundImg: Img3
  },
  {
    title: "Innocent sorcerers",
    id: "innocent-sorcerers",
    rating: 7.8,
    backgroundImg: Img4
  },
  {
    title: "Bande a part",
    id: "bande-a-part",
    rating: 8.2,
    backgroundImg: Img5
  },
  {
    title: "Mephisto",
    id: "maphisto",
    rating: 7.8,
    backgroundImg: Img6
  },
  {
    title: "La Dolce Vita",
    id: "la-dolce-vita",
    rating: 6.7,
    backgroundImg: Img7
  },
  {
    title: "One flew over cookoo's nest",
    id: "one-flew-over",
    rating: 9.2,
    backgroundImg: Img8
  },
  {
    title: "The Mirror",
    id: "the-mirror",
    rating: 7.4,
    backgroundImg: Img9
  },
  {
    title: "Vivre sa vie",
    id: "vivre-sa-vie",
    rating: 8.2,
    backgroundImg: Img10
  },
  {
    title: "Unbearable lightness of being",
    id: "unbearable-lightness",
    rating: 7.8,
    backgroundImg: Img11
  },
  {
    title: "The Seventh Seal",
    id: "seventh-seal",
    rating: 8.3,
    backgroundImg: Img12
  }
];

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
