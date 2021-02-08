import React from 'react'
import { data } from './data'
import { Link, Redirect } from 'react-router-dom'
import { hasUserToggle } from '.'
const Posts = () => {
  const getData = React.useContext(hasUserToggle)
  const [posts,setPosts] = React.useState([]) 
  React.useEffect(()=>{
    setPosts(data)
  },[]) 
  
  React.useEffect(()=>{
    if (localStorage.getItem("username")) {
      localStorage.removeItem("notFound")
    } else {
      localStorage.setItem("notFound","notFound")
    }
  })

  return (
    <>
      {localStorage.getItem("username") || getData.hasUser ? (
        posts.map(post=>(
          <div key={post.id} className="bg-secondary p-3 m-3 text-white">
          <h5>Title : {post.title}</h5>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className="btn btn-primary" href="ww">{post.id} Read more...</Link>
        </div>
      ))
      ):( 
        <Redirect to="/login" /> 
      )}
    </>
  )
}

export default Posts
