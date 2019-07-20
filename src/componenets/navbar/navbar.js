import React from "react";
import "./navbar.css";
import { Navbar } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';


const header = props => (
  <>
    <Navbar className="navbar" expand="lg" bg="light"> 
      <Navbar.Brand className="title" href="/">
        {props.children}
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      <Navbar.Toggle />
      <Navbar.Text className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </Navbar.Text>
    </Navbar>
    <Jumbotron className="header" >
      <h1>Clicky Game!</h1>
      <h2>
        Click on an image to earn points, but don't click on any more than once!
      </h2>
    </Jumbotron>
  </>
);

export default header;
