import React, { Component } from 'react'

class PatternPuzzle extends Component {
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
      return( 
          <div>
              <h1>{this.props.puzzleText}</h1>
        <button id="btn1" className="top" onClick={this.enterSequence}></button>
        <div className="mid">
          <button id="btn2" onClick={this.enterSequence}></button>
          <button id="btn3" onClick={this.enterSequence}></button>
        </div>
        <button id="btn4" className="bottom" onClick={this.enterSequence}></button>
        </div>
    )
  }
}

export default PatternPuzzle;