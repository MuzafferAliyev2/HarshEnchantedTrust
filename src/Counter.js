import React from 'react';
import './App.css';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.addTwo = this.addTwo.bind(this);
    this.addThree = this.addThree.bind(this);

    this.minusOne = this.minusOne.bind(this);
    this.minusTwo = this.minusTwo.bind(this);
    this.minusThree = this.minusThree.bind(this);


    this.reset = this.reset.bind(this);
    this.state = {
      number: 25
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    })
  }
 addTwo() {
    this.setState((prevState) => {
      return {
        number: prevState.number + 2
      }
    })
  }
   addThree() {
    this.setState((prevState) => {
      return {
        number: prevState.number +3
      }
    })
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1
      }
    })
  }
  
  minusTwo() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 2
      }
    })
  }
  
  minusThree() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 3
      }
    })
  }

  reset() {
    this.setState({
      number: 25
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.name}: {this.state.number}</p>
         <button onClick={this.addThree}>+3</button>
          <button onClick={this.addTwo}>+2</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
         <button onClick={this.minusTwo}>-2</button>
          <button onClick={this.minusThree}>-3</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}


export default Counter;
