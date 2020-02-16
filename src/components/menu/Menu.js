import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = { menuVisible: false };
  }
  toggleVisible() {
    this.setState({ menuVisible: !this.state.menuVisible });
  }
  render() {
    return (
      <div>
        <MenuButton
          toggleVisible={() => this.toggleVisible()}
          menuVisible={this.state.menuVisible}
        />
        <nav className="Menu">
          <Link to="/" className="menuItem">
            Home
          </Link>
          <Link to="/about" className="menuItem">
            About
          </Link>
          <Link to="/contact" className="menuItem">
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}
function MenuButton(props) {
  return (
    <button className="MenuButton" onClick={props.toggleVisible}>
      X {props.menuVisible ? "23" : "dfkjhgdsf"}
    </button>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
