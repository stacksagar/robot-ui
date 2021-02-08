import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Value = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.ValueReducer.value);
  const subject = useSelector((state) => state.ValueReducer.subject);

  const subjectChange = (e, subject) => {
    e.preventDefault();
    dispatch({ type: 'changeSubject', payload:subject });
  };

  return (
    <div>
      <p className="text-success text-center">Value is {value} </p>
      <button
        onClick={() => dispatch({ type: 'plus', payload: 10 })}
        className="mx-1 btn btn-secondary"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'minus', payload: 10 })}
        className="mx-1 btn btn-secondary"
      >
        Decrement
      </button>

      <div className="bg-secondary p-5 m-2">
        <p className="text-white text-center">Subject: {subject} </p>
        <form onSubmit={(e)=>subjectChange(e,'Redux State!')}>
          <input
            type="text"
            className="form-control"
            placeholder="Your Subject..."
          />
          <button>Submin Subject</button>
        </form>
      </div>
    </div>
  );
};

export default Value;
