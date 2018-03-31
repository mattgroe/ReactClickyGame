import React, { Component } from 'react';
// import logo from './logo.svg';

//import components
import Navbar from './components/navbar/navbar.js';
import Wrapper from './components/wrapper/wrapper.js';
import Cards from './components/cards/cards.js';
import Footer from './components/footer/footer.js';

// import css
import './App.css';

//import json data
import gamepieces from './gamepieces.json';
import page from './page.json';

class App extends Component {
    state = {
      page,
      gamepieces,
      wins: 0,
      losses: 0,
      rand: Math.floor(Math.random() * 8) + 1
    };

    componentDidMount() {
      console.log(gamepieces)
      console.log("This is the random number",this.state.rand);
      
    }

    scoreUp = () => {
      this.setState({wins: this.state.wins + 1});
    }

    scoreDown = () => {
      this.setState({losses: this.state.losses + 1});
    }

    newGame = id => {

    }

    shuffle = id => {
      this.state.rand = Math.floor(Math.random() * 8) + 1;
    }


    checkWin = id => {      
      console.log('This is the id', id);

      if (this.state.rand === id) {
        alert("You've won!");
        this.scoreUp();
        this.shuffle();
      } else {
        alert("You've lost!");
        this.scoreDown();
        this.shuffle();
      }
    }


  render() {
    return (
      <Wrapper>
        <div>
          {this.state.page.map(page => (
              <Navbar
                logo={page.logo}
                title={page.title}
                wins={this.state.wins}
                losses={this.state.losses}
              />
          ))}
        </div>

        <div className="game-pieces">
          <div className="game-pieces-cont">
            {this.state.gamepieces.map(gamepiece => (
                <Cards
                  key={gamepiece.id}
                  id={gamepiece.id}
                  name={gamepiece.name}
                  image={gamepiece.image}
                  checkWin={this.checkWin}
                />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
