import React, { Component } from 'react'
const congrats = require('../images/congrats.gif');

class End extends Component {
  selectLevel = (e) => {
  const id = parseInt(e.target.id);
  this.props.selectPuzzle(id);
  }
  render() {
    return (
      <div>
        <h1 className="aclonica">Congrats you've finshed the game</h1>
        <img src={congrats} className="congrats" alt="Congratulations!"/>
        <h2 className="aclonica" >Select a level to replay</h2>
        <button id="1" className="selectLevel" onClick={this.selectLevel}>1</button>
        <button id="2" className="selectLevel" onClick={this.selectLevel}>2</button>
        <button id="3" className="selectLevel" onClick={this.selectLevel}>3</button>
        <button id="4" className="selectLevel" onClick={this.selectLevel}>4</button>
        <button id="5" className="selectLevel" onClick={this.selectLevel}>5</button>
        <button id="6" className="selectLevel" onClick={this.selectLevel}>6</button>
        <button id="7" className="selectLevel" onClick={this.selectLevel}>7</button>
        <button id="8" className="selectLevel" onClick={this.selectLevel}>8</button>
        <button id="9" className="selectLevel" onClick={this.selectLevel}>9</button>
        <button id="10" className="selectLevel" onClick={this.selectLevel}>10</button>
        <h1>Share:</h1>
        <a href="https://twitter.com/intent/tweet?text=Great Puzzle Game!&url=https://puzzle-it.glitch.me/" target="_blank" rel="noopener noreferrer" className="fab fa-twitter fa-4x" aria-hidden="true"><span style={{"fontSize":"0px"}}>Share on Twitter</span></a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://puzzle-it.glitch.me/" target="_blank" rel="noopener noreferrer" className="fab fa-facebook fa-4x" aria-hidden="true"><span style={{"fontSize":"0px"}}>Share on Facebook</span></a>
      </div>
    )
  }
}

export default  End;