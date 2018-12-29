import React, { Component } from 'react'

class PhonePuzzle extends Component {
  state={
    sequence:''
  }
  componentWillReceiveProps = () => {
  this.setState({
    sequence:''
  })
  }
  enterSequence = (e) => {
  let id = e.target.id.substr(e.target.id.length-1);
  if(this.state.sequence.length<this.props.patternLength){
  this.setState({
  sequence:this.state.sequence+id
  },function(){
    this.props.win(this.state.sequence===this.props.winMatch)
  })
  }else{
    let pattern = this.state.sequence.substr(1,this.state.sequence.length)+id;
    this.setState({
      sequence:pattern
    })
    this.props.win(pattern===this.props.winMatch)
  }
    }
  render() {
    const puzzleMessage = this.props.puzzleImage===undefined?<h1>{this.props.puzzleText}</h1>:<img className="phonePuzzleImage" src={this.props.puzzleImage} alt="puzzleImage"/>;
      return( 
          <div>
        {puzzleMessage}
        <div className="phoneBtns">
        <button id="pbtn1" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn2" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn3" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn4" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn5" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn6" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn7" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn8" className="phoneBtn" onClick={this.enterSequence}></button>
        <button id="pbtn9" className="phoneBtn" onClick={this.enterSequence}></button>
        </div>
        </div>
    )
  }
}

export default PhonePuzzle;