import React from "react";
import { Link } from "react-router-dom";
import { hasUserToggle } from './index'
const Navbar = () => {
  const getData = React.useContext(hasUserToggle)
  const register =(e)=>{
   if ( e.target.innerText === 'Log Out' ) {
    localStorage.removeItem("username")
    getData.setUser(false)
   }
  }
  return (
    <div style={{position:'sticky',top:'0'}} className="bg-info p-2 pb-0 d-flex justify-content-between px-5">
      <Link to="/"> <h4 className="text-warning">LOGO</h4> </Link>
      <div className="d-flex">
       <Link to="/"> <button className="btn btn-light btn-sm">Home</button> </Link>
       <Link to="/posts" > <button className="btn btn-light btn-sm mx-3">Posts</button> </Link>
       <Link to="/about" > <button className="btn btn-light btn-sm">About</button> </Link>
       <Link to={`/${localStorage.getItem("username") ? 'logout':'login'}`} > <button onClick={register} className="btn btn-light btn-sm mx-3">
       {localStorage.getItem("username") ? 'Log Out' : "Log In"}
         </button> </Link>
      </div>
    </div>
  );
};

export default Navbar;