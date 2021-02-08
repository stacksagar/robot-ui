import React from "react";
import Button from "./Button";

export const Optimization = () => {
  const [value, setValue] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [id, setId] = React.useState(0);
  const [id2, setId2] = React.useState(0);

  const isEven = React.useMemo(() => {
    let number = 0;
    while (number < 222222222) number++;
    return id % 2 === 0
  },[id]);

  const incrementValue = React.useCallback(() => {
    setValue(value + 1);
  }, [value]);

  const incrementNumber = React.useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <>
      <p>Value is {value}</p>
      <p>Number is {number}</p>
      <Button func={incrementValue} count="value" />
      <Button func={incrementNumber} count="number" />
      <button className="d-block m-1" onClick={()=>setId(id+1)}> ID : {id} { isEven ? "Even" : "Odd"} </button>
      <button className="d-block m-1" onClick={()=>setId2(id2+1)}> ID2 : {id2} </button>
    </>
  );
};
