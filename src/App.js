import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    n: "",
    answer: "",
  };

  handleInput = event => {
    this.setState({n: event.target.value});
  }

  findHighestPowerOf = () => {
    let num = this.state.n-1;
    let base = -1;
    let tempNum = -1;
    let pow = -1;
    let i = 2;

    if (num === 0) {
      this.setState({ answer: JSON.stringify([0, -1]) });
    }
    else if ( num === 1 ||
              num === 2 ||
              num === 3 ) {
      this.setState({ answer: JSON.stringify([1, -1]) });
    } else {
      while (i < 1000) {
        const rawPow = Math.log(num) / Math.log(i);
        const currPow = num < Math.pow(i, Math.round(rawPow)) ? Math.floor(rawPow) : Math.round(rawPow);
        const currVal = Math.pow(i, currPow);
     
        if ( currVal > tempNum &&
             currPow !== 1 ) {
          tempNum = currVal;
          base = i;
          pow = currPow; 
        }

        i++;
      }

      this.setState({ answer: JSON.stringify([base, pow]) });
    }
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput} placeholder="Enter num" />
        <button onClick={this.findHighestPowerOf}>find answer</button>
        <p>{this.state.answer}</p>
      </div>
    );
  }
}

export default App;
