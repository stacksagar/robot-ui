import React from 'react'
import AA from './AA'
import BB from './BB'
import CC from './CC'
export const MyContext = React.createContext()

const ReducerContext = () => {

  const myObj = {
    value : 0
  }
  
  const reducer =(obj,action)=> {
    switch(action.type) {
      case 'increment':
        return {
          value: obj.value + action.value
        }

      case 'decrement':
        return {
          value: obj.value > 1 ? obj.value - action.value : 0
        }

        default: 
        return myObj

    }
  }

  const [obj,action] = React.useReducer(reducer, myObj)
  const [objAA,actionAA] = React.useReducer(reducer, myObj)
  const [objBB,actionBB] = React.useReducer(reducer, myObj)
  const [objCC,actionCC] = React.useReducer(reducer, myObj)

  return (
    <div> 
     <div className="bg-secondary text-white p-2 m-3 rounded">
      <h6>(index) value is {obj.value}</h6>
      <button onClick={()=>action({type:'increment', value:5})} className="btn btn-dark btn-sm">Increment</button>
      <button onClick={()=>action({type:'decrement', value:5})} className="btn btn-dark btn-sm mx-1">Decrement</button>
      <button onClick={()=>action({type:'reset'})} className="btn btn-dark btn-sm">Reset Default</button>
     </div>

      <MyContext.Provider value={{objAA,actionAA}}><AA /> </MyContext.Provider>
      <MyContext.Provider value={{objBB,actionBB}}><BB /> </MyContext.Provider>
      <MyContext.Provider value={{objCC,actionCC}}><CC /> </MyContext.Provider>
    </div>
  )
}

export default ReducerContext
