import React, { Component } from 'react'

import NumberPuzzle from './numberPuzzle';
import PatternPuzzle from './patternPuzzle';
import PhonePuzzle from './phonePuzzle';

class PuzzleTemplate extends Component {

componentWillReceiveProps = () => {
  document.getElementById("solved").style.display="none";
  document.getElementById("next").style.display="none";
}
win = (pattern=false) => {
  if(pattern){
  document.getElementById("solved").style.display="block";
  document.getElementById("next").style.display="block";
  }
}
render() {
const puzzleStyle = this.props.puzzleSet.puzzleStyle === "number"? <NumberPuzzle puzzleImage={this.props.puzzleSet.puzzleImage} winMatch={this.props.puzzleSet.puzzleGoal} win={this.win}/>:this.props.puzzleSet.puzzleStyle === "pattern" ? <PatternPuzzle puzzleText={this.props.puzzleSet.puzzleText} winMatch={this.props.puzzleSet.puzzleGoal} patternLength={this.props.puzzleSet.patternLength} win={this.win}/>:<PhonePuzzle puzzleText={this.props.puzzleSet.puzzleText} puzzleImage={this.props.puzzleSet.puzzleImage} winMatch={this.props.puzzleSet.puzzleGoal} patternLength={this.props.puzzleSet.patternLength} win={this.win} />
const hint = this.props.puzzleSet.puzzleHint!==undefined?this.props.puzzleSet.puzzleHint: <img src={this.props.puzzleSet.puzzleImageHint} alt="hint"/>
      return(
      <div className="App">
      <h1>{this.props.puzzleSet.puzzleName}</h1>
        <div id="solved"></div>

        <div className="puzzleBox">
        <h2 style={{"textAlign":"left","margin":"10px"}}>{this.props.puzzleSet.puzzleNumber}</h2>
        {puzzleStyle}
        </div>
        <button id="next" onClick={this.props.nextPuzzzle} >Next Puzzle</button>
        <div className="displayHint">
        <button className="displayHintButton">Hint</button> 
        <p className="hint">{hint}</p>
        </div>
      </div>
    )
  }
}

export default PuzzleTemplate;