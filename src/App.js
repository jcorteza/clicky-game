import React, { Component } from 'react';
// import './App.css';
import Header from "./components/Header";
import GameDisplay from "./components/GameDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameDisplay />
      </div>
    );
  }
}

export default App;
