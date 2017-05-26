import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.timerFunction = this.timerFunction.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.state={value: ''}
    this.state = {
      counter: 0

    }
  }

  handleStart(e){
    this.myInterval = setInterval(this.timerFunction, 1000)
  }

  timerFunction(){
    this.setState({
      counter: this.state.counter +=1
    })
    console.log(this.state.counter)
  }

  handlePause(e){
    clearInterval(this.myInterval)
  }

  handleReset(e){
    clearInterval(this.myInterval)
    this.setState({
      counter: 0
    })

  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={(e) => this.handleReset(e)}>Reset</button>
          <button onClick={(e) => this.handleStart(e)}>Start</button>
          <button onClick={(e) => this.handlePause(e)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
