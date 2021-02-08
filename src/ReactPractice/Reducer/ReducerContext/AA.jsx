import React from "react";
import { MyContext } from "./index";

const AA = () => {
  const getObj = React.useContext(MyContext);
  return (
    <div className="bg-secondary text-white p-2 m-3 rounded">
      <h6>(AA) value is {getObj.objAA.value}</h6>
      <button onClick={()=>getObj.actionAA({type:'increment', value:5})} className="btn btn-success btn-sm">Increment</button>
      <button onClick={()=>getObj.actionAA({type:'decrement', value:5})} className="btn btn-success btn-sm mx-1">Decrement</button>
      <button onClick={()=>getObj.actionAA({type:'reset'})} className="btn btn-success btn-sm">Reset Default</button>
    </div>
  );
};

export default AA;
