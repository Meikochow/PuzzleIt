import React, { Component } from 'react';
import PuzzleTemplate from './puzzleTemplate';

const shapes = require('../images/shapes.png');
const triangles = require('../images/triangles.png')
const chess = require('../images/chess.png');
const fibonacci = require('../images/fibonacci.png');
const connections = require('../images/connections.png');
const follow = require('../images/follow.png');
const dial = require('../images/Dial.png');


const puzzleSet = {
    1:{
      puzzleNumber:1,
      puzzleName:"Easy One",
      puzzleHint:"It's all about the corners",
      puzzleImage:shapes,
      puzzleStyle:"number",
      puzzleGoal:"346"
    },
    2:{
      puzzleNumber:2,
      puzzleName:"Easy Two",
      puzzleHint:"It's about the triangles",
      puzzleImage:triangles,
      puzzleStyle:"number",
      puzzleGoal:"387"
    },
    3:{
      puzzleNumber:3,
      puzzleName:"You're doing great!",
      puzzleHint:"Follow the swirl from inside out",
      puzzleImage:follow,
      puzzleStyle:"phone",
      patternLength:9,
      puzzleGoal:"521478963"
      },
    4:{
      puzzleNumber:4,
      puzzleName:"4 times smaller?",
      puzzleHint:"See them as Arrows",
      puzzleText:"1V<<<<V1",
      puzzleStyle:"pattern",
      patternLength:8,
      puzzleGoal:"14222241"
    },
    5:{
      puzzleNumber:5,
      puzzleName:"HP Reference?",
      puzzleHint:"It's all about the connections",
      puzzleStyle:"number",
      puzzleImage:connections,
      puzzleGoal:"217"
    },
    6:{
      puzzleNumber:6,
      puzzleName:"Ready for a trip?",
      puzzleHint:"All maps have 'em",
      puzzleStyle:"pattern",
      puzzleText:"S.W.E.N.",
      patternLength:4,
      puzzleGoal:"4231"
      },
     7:{
      puzzleNumber:7,
      puzzleName:"Is it decrementing?",
      puzzleHint:"Did you get them all?",
      puzzleText:"98797796",
      puzzleStyle:"phone",
      patternLength:9,
      puzzleGoal:"798797796"
     },
    8:{
      puzzleNumber:8,
      puzzleName:"Also a fascinating game",
      puzzleHint:"Maximum steps they take",
      puzzleStyle:"number",
      puzzleImage:chess,
      puzzleGoal:"148"
      },
    9:{
      puzzleNumber:9,
      puzzleName:"Everywhere in the nature",
      puzzleHint:"First 6 from the Fibonacci sequence except 0",
      puzzleImage:fibonacci,
      puzzleStyle:"phone",
      patternLength:6,
      puzzleGoal:"112358"
    },
    10:{
      puzzleNumber:10,
      puzzleName:"Almost there!",
      puzzleImageHint:dial,
      puzzleText:"PUZZLE",
      puzzleStyle:"phone",
      patternLength:6,
      puzzleGoal:"789953"
    }
  }

class PuzzleManager extends Component {
  componentWillMount=()=>{

  }
  checkForLevel = () =>{
    let nextPuzzle = parseInt(this.props.puzzle)+1;
    if(puzzleSet[nextPuzzle]!==undefined){
      this.props.nextPuzzle(nextPuzzle);
    }else{
      this.props.nextPuzzle("end");
    }
  }
  render() {
    return <PuzzleTemplate puzzleSet={puzzleSet[this.props.puzzle]} nextPuzzzle={this.checkForLevel}/>;
  }
}

export default PuzzleManager;