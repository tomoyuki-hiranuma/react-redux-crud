import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class App extends React.Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>counter: { props.count }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  count: state.countReducers.count
})
const mapDispatchToProps = dispatch => ({
  increment:() => dispatch(increment()),
  decrement:() => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
