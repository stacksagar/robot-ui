import React from 'react'
import {data} from './data'

const SinglePost = ({match}) => {

  const [post,setPost] = React.useState({title:'',body:'',id:0})

  React.useEffect(()=>{
    const get = data.find(post=>post.id===Number(match.params.id))
    setPost({...get})   
    return ()=> {
      alert('Are you sure exit!')
    } 
  },[match])
  
  return (
    <div className="bg-dark m-5 rounded p-5">
      <h2 className="text-info"> <small className="text-secondary">({post.id})</small> {post.title}</h2>
      <p className="text-light">{post.body}</p>
    </div>
  )
}

export default SinglePost
