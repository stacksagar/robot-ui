import React from 'react'
import { MyContext } from './index'

export default function BB() {
  const getObj = React.useContext(MyContext)

  return <div className="bg-secondary text-white p-2 m-3"> 
   <h6>(BB) value is {getObj.objBB.value} </h6>
   <button onClick={()=>getObj.actionBB({type:'increment',value: 5})} className="btn btn-warning btn-sm">Increment</button>
   <button onClick={()=>getObj.actionBB({type:'decrement',value: 5})} className="btn btn-warning btn-sm mx-1">Decrement</button>
   <button onClick={()=>getObj.actionBB({type:'reset'})} className="btn btn-warning btn-sm mx-1">Reset Default</button>
  </div>
}