import React from "react";

const Navbar = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </nav>
);

export default Navbar;