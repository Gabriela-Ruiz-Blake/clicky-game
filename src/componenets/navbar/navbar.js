import React from "react";
import "./navbar.css"

const Navbar = props => (
    <nav className="navbar">
    <a className="title" href="/">{props.children}</a>
    <div className="scores my-sm-0">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </nav>
);

export default Navbar;