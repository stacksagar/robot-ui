import React from 'react'

export function Reducer2() {

  const initialObject = {
    value : 0, 
    subject: 'Binary'
  }

  const reduce = (object, action) => {
    switch (action) {
      case "increment":
        return {
          ...object,
          value : object.value + 1
        }

      case "decrement":
        return {
          ...object,
          value : object.value - 1
        }

      case "reset":
        return initialObject;

      default:
        return object;
    }
  };

  const [myObject, action] = React.useReducer(reduce, initialObject);

  return (
    <>
      <p>
        <small>From Reducer (2)</small> Subject: {myObject.subject} : Value is {myObject.value}
      </p>
      <button
        onClick={() => action("increment")}
        className="btn mx-2 btn-secondary"
      >
        Increment
      </button>
      <button
        onClick={() => action("decrement")}
        className="btn mx-2 btn-secondary"
      >
        Decrement
      </button>
      <button onClick={() => action("reset")} className="btn mx-2 btn-danger">
        Reset
      </button>
    </>
  );
}
