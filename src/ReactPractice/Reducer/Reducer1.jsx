import React from "react";

export function Reducer1() {
  const reduce = (value, action) => {
    switch (action) {
      case "increment":
        return value + 1;

      case "decrement":
        return value > 1 ? value - 1 : 0;

      case "reset":
        return 0;

      default:
        return value;
    }
  };

  const [value, action] = React.useReducer(reduce, 0);

  return (
    <>
      <p>
        <small>From Reducer (1)</small> Value is {value}
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