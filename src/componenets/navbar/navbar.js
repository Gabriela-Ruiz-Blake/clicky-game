import React from "react";
import "./navbar.css";
import { navbar } from "react-bootstrap";

const Navbar = props => (
  <nav className="navbar">
    <a className="title" href="/">
      {props.children}
    </a>
    
    <div className="scores mr-auto">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </nav>
);

export default Navbar;
