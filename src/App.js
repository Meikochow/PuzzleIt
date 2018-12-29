import React, { Component } from 'react';
import './App.css';

import Intro from './components/intro';
import PuzzleManager from './components/puzzleManager';
import End from './components/end';

class App extends Component {
  state = {
    puzzle:0
  }
nextPuzzle = (level=0) => {
this.setState({
  puzzle:level
})
}
  render() {
    const puzzle = this.state.puzzle===0?<Intro start={this.nextPuzzle}/>:this.state.puzzle==="end"?<End selectPuzzle={this.nextPuzzle}/>:<PuzzleManager puzzle={this.state.puzzle} nextPuzzle={this.nextPuzzle}/>;
     return(
        <div className="App">
        {puzzle}
      </div>
      )
    }
  }

export default App;
