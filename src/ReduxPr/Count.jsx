import React from 'react';
import { connect } from 'react-redux';

const Count = ({ val, inc, dec }) => {
 
  return (
    <div>
      <p>Count is {val} </p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { val: state.Reducers.count };
};
const inc = () => {
  return { type: 'increment', count: 10 };
};
const dec = () => {
  return { type: 'decrement', count: 10 };
};

export default connect(mapStateToProps, { inc, dec })(Count);
