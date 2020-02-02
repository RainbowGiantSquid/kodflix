import React from "react";
import Film from "./components/film";
import Fruit from "./components/fruits";
import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='appHeader'>
          {/* <Menu /> */}
          <div className='card'>
            <h1 className='title'>OLDFLIX</h1>
            <Fruit />
          </div>
        </header>
        <article className='container'>
          <Film />
        </article>
      </div>
    </div>
  );
}
export default App;
