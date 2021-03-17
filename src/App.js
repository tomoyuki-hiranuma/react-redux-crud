import React from 'react';
import './App.css';

const App = () => {
  return (
    <Counter></Counter>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  };

  handlePlusClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleMinusClick = () => {
    if(this.state.counter > 0){
      this.setState({ counter: this.state.counter - 1 });
    }else {
      this.setState({ counter: this.state.counter });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>couner: { this.state.counter }</div>
        <button onClick={this.handlePlusClick.bind(this)}>+1</button>
        <button onClick={this.handleMinusClick.bind(this)}>-1</button>
      </React.Fragment>
    )
  };
}

export default App;
