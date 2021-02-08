import React from 'react'
import AllFunctionality from './AllFunctionality'

const ClickCount = (props) => {
  return (
    <div className="bg-dark text-white p-3 m-3 rounded">
      <h6> ClickCount is {props.count} </h6>
      <button onClick={()=>props.increment(5)}> Increment </button>
      <button onClick={()=>props.decrement(5)}> Decrement </button>
    </div>
  )
}

export default AllFunctionality(ClickCount)