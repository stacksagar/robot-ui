import React from 'react'
import ReactDOM from 'react-dom'

const CreatePort = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Create Portal</h1>
    </div>
    , 
    document.getElementById("second_root")
  )
}

export default CreatePort
