import React from "react";
import { MyContext } from "./index";

const CC = () => {
  const getObj = React.useContext(MyContext);
  return (
    <div className="bg-secondary text-white p-2 m-3 rounded">
      <h6>(CC) value is {getObj.objCC.value}</h6>
      <button onClick={()=>getObj.actionCC({type:'increment', value:5})} className="btn btn-light btn-sm">Increment</button>
      <button onClick={()=>getObj.actionCC({type:'decrement', value:5})} className="btn btn-light btn-sm mx-1">Decrement</button>
      <button onClick={()=>getObj.actionCC({type:'reset'})} className="btn btn-light btn-sm">Reset Default</button>
    </div>
  );
};

export default CC;
