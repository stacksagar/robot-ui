import React from 'react'

const UseRef = () => {

  const [name,setName] = React.useState("")
  const inputRef = React.useRef()

  return (
    <div className="p-5 bg-dark text-light">
      <p>Name is {name}</p>
      <input placeholder="type...." ref={inputRef} onChange={()=>setName(inputRef.current.value)} type="text" className="orm-control mt-3"/>
    </div>
  )
}

export default UseRef
