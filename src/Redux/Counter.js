import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './services/actions/CounterAction';

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <h3>Count is: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.CounterReducer.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
