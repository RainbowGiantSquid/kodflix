import React from "react";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Header className="headerImg"></Header>
          <h1>I am a header title</h1>
        </header>
        <article>
          <h1>this is an article</h1>
        </article>
      </div>
    </div>
  );
}
export default App;
