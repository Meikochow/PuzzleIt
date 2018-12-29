import React, { Component } from 'react'

class NumberPuzzle extends Component {
  increment=(e)=>{
    let val = parseInt(e.target.value)<9 ? parseInt(e.target.value)+1 : 0;   
    e.target.value=val;
    this.checkForWin();
  }
  checkForWin = () => {
    let btn1 = document.getElementById("input1").value;
    let btn2 = document.getElementById("input2").value;
    let btn3 = document.getElementById("input3").value;
    let pattern = btn1+btn2+btn3;
    this.props.win(pattern===this.props.winMatch);
  }
  render() {
  const image = this.props.puzzleImage!==undefined? <img className="pzlImg" src={this.props.puzzleImage} alt="puzzleImage"/>:"";
    return (
    <div>
      {image}
<div className="btnGroup">
<input type="button" id="input1" onClick={this.increment} value="0"></input>
<input type="button" id="input2" onClick={this.increment} value="0"></input>
<input type="button" id="input3" onClick={this.increment} value="0"></input>
</div>
</div>
    )
  }
}

export default NumberPuzzle;