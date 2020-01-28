import React from "react";
import FilmCover from "./components/cover";
import FilmCard from "./components/card";
import Fruit from "./components/fruits";
import Img1 from "./img/stalker.jpg";
import Img2 from "./img/cranes-are-flying.jpg";
import Img3 from "./img/ashes_and_diamonds.jpg";
import Img4 from "./img/Innocent_Sorcerers.jpg";
import Img5 from "./img/bande_a_part.jpg";
import Img6 from "./img/mephisto.jpg";
import Img7 from "./img/la-dolce.jpg";
import Img8 from "./img/one_flew.jpg";
import Img9 from "./img/the_mirror.jpg";
import Img10 from "./img/vive-sa-vie.jpg";
import Img11 from "./img/un_light.jpg";
import Img12 from "./img/seventh_seal.jpg";
import Img13 from "./img/8_half.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="appHeader">
          <div className="card">
            <h1 className="title">OLDFLIX</h1>
            <Fruit />
            <FilmCard className="cardOverlay" title="Stalker" rating="5.8" />
            <FilmCover backgroundImg={Img1} />
          </div>
        </header>
        <article className="container">
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="The Godfather"
              rating="5.7"
            />
            <FilmCover backgroundImg={Img2} />
          </div>
          <div className="card">
            <FilmCard className="cardOverlay" title="Good" rating="8.7" />
            <FilmCover backgroundImg={Img3} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img4} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img5} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img6} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img7} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img8} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img9} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img10} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img11} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img12} />
          </div>
          <div className="card">
            <FilmCard
              className="cardOverlay"
              title="Philadelphia"
              rating="3.7"
            />
            <FilmCover backgroundImg={Img13} />
          </div>
        </article>
      </div>
    </div>
  );
}
export default App;
