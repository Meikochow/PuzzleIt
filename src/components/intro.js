import React, { Component } from 'react';
const logo = require('../images/logo.gif')

class Intro extends Component {
    start = () => {
        this.props.start(1);
    } 
  render() {
    return (
      <div>
        <h1 className="aclonica">Welcome to PuzzleIt</h1>
        <h2 className="aclonica">The most puzzled up puzzle ever to be puzzled?</h2>
        <img id="logo"src={logo} alt="logo"/>
        <button id="start" onClick={this.start}>Start</button>
      </div>
    )
  }
}

export default Intro;