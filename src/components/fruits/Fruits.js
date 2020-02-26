import React from "react";

export default class Fruit extends React.Component {
  constructor() {
    super();
    this.state = { isFavourite: "NO!" };
  }
  changeFavourite() {
    let isFavourite = this.state.isFavourite === "NO!" ? "YES" : "NO!";
    this.setState({ isFavourite: isFavourite });
  }
  render() {
    return (
      <div>
        <h1>{this.state.isFavourite}</h1>
        <button className="buttonChange" onClick={() => this.changeFavourite()}>
          Change favoutire
        </button>
      </div>
    );
  }
}
