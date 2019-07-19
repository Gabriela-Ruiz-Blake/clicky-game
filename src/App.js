import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./componenets/card/card";
import Navbar from "./componenets/navbar/navbar";
import Wrapper from "./componenets/wrapper/wrapper";
import character from "./characters.json";


class App extends Component {
  // Setting this.state.character to the character json array
  state = {
    character,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.character.forEach(character => {
      character.count = 0;
    });
    alert(`Game Over! \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.character.find((o, i) => {
      if (o.id === id) {
        if (character[i].count === 0) {
          character[i].count = character[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.character.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}>Clicky Game</Navbar>
        {this.state.character.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
