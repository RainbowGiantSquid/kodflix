import React from "react";
import FilmCover from "../cover";
import FilmCard from "../card";
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

const films = [
  {
    title: "Stalker",
    id: 0,
    rating: 8.9,
    backgroundImg: Img
  },
  {
    title: "8 1/2",
    id: 1,
    rating: 9.2,
    backgroundImg: Img1
  },
  {
    title: "Cranes are flying",
    id: 2,
    rating: 7.4,
    backgroundImg: Img2
  },
  {
    title: "Ashes and diamonds",
    id: 3,
    rating: 9.1,
    backgroundImg: Img3
  },
  {
    title: "Innocent sorcerers",
    id: 4,
    rating: 7.8,
    backgroundImg: Img4
  },
  {
    title: "Bande a part",
    id: 5,
    rating: 8.2,
    backgroundImg: Img5
  },
  {
    title: "Mephisto",
    id: 6,
    rating: 7.8,
    backgroundImg: Img6
  },
  {
    title: "La Dolce Vita",
    id: 7,
    rating: 6.7,
    backgroundImg: Img7
  },
  {
    title: "One flew over cookoo's nest",
    id: 8,
    rating: 9.2,
    backgroundImg: Img8
  },
  {
    title: "The Mirror",
    id: 9,
    rating: 7.4,
    backgroundImg: Img9
  },
  {
    title: "Vivre sa vie",
    id: 10,
    rating: 8.2,
    backgroundImg: Img10
  },
  {
    title: "Unbearable lighness of being",
    id: 11,
    rating: 7.8,
    backgroundImg: Img11
  },
  {
    title: "The Seventh Seal",
    id: 12,
    rating: 8.3,
    backgroundImg: Img12
  }
];

export default class Film extends React.Component {
  render() {
    return films.map(film => {
      return (
        <div className='card' key={film.id}>
          <FilmCard title={film.title} rating={film.rating} />
          <FilmCover backgroundImg={film.backgroundImg} />
        </div>
      );
    });
  }
}
