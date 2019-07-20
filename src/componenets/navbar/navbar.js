import React from "react";
//import "./navbar.css";
//import { navbar } from "react-bootstrap";

const Navbar = props => (
  <Navbar className="navbar">
    <Navbar.Brand className="title" href="/">
      {props.children}
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.text className="scores mr-auto">
      Score: {props.score} Highscore: {props.highscore}
    </Navbar.text>
  </Navbar>
);

export default Navbar;
