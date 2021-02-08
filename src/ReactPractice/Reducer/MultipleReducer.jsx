import React from 'react'


export function MultipleReducer() {

  const myObject = {
    value : 0
  }

  const reduce = (obj,action) => {
    switch(action.type) {
      case 'increment': 
      return {
        ...obj, 
        value : obj.value + action.value
      } 

      case 'decrement': 
      return {
        ...obj, 
        value : obj.value - action.value
      }

      default:
      return myObject 

    }
  }

  const [getObj,action] = React.useReducer(reduce,myObject)
  const [getObj2,action2] = React.useReducer(reduce,myObject)

  return (
    <div className="d-flex flex-column justify-content-around"> 
       <h4 className="text-primary">Multiple Reducer</h4>
     <div>
       <h6>Value is {getObj.value}</h6>
       <button onClick={()=>action({type :'increment', value: 2})} className="btn btn-primary btn-sm">Increment 2</button>
       <button onClick={()=>action({type :'decrement', value: 2})} className="mx-1 btn btn-primary btn-sm">Decrement 2</button>
       <button onClick={()=>action({type :''})} className="btn btn-danger btn-sm">Reset Default</button>
     </div>
     <br/>
     <div>
       <h6>Value is {getObj2.value}</h6>
       <button onClick={()=>action2({type :'increment', value: 2})} className="btn btn-primary btn-sm">Increment 2</button>
       <button onClick={()=>action2({type :'decrement', value: 2})} className="mx-1 btn btn-primary btn-sm">Decrement 2</button>
       <button onClick={()=>action2({type :''})} className="btn btn-danger btn-sm">Reset Default</button>
     </div>
    </div>
  )

}