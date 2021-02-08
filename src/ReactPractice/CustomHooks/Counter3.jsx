import React from "react";
import CustomHook from "./CustomHook";

const Counter3 = () => { 
  //\/\/\/ Before
  // const [count, setCount] = React.useState(0);
  // const increment = (val) => setCount((prev) => prev + val);
  // const decrement = (val) => setCount((prev) => prev - val);

  //\/\/\/\/ After
  const [count,increment,decrement] = CustomHook(15)

  return <div className="bg-dark p-3 m-3 text-white rounded">
    <h6> Counter is {count} </h6>
    <button onClick={()=>increment(5)} className="btn btn-warning btn-sm mx-1">Increment</button>
    <button onClick={()=>decrement(5)} className="btn btn-warning btn-sm mx-1">Increment</button>
  </div>;
};

export default Counter3
