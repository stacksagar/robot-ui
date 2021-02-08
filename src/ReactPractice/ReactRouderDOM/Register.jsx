import React from "react";
import { hasUserToggle } from "./index";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const getData = React.useContext(hasUserToggle);
 

  const register = (e) => {
    if (e.target.innerText === "Log In") {
      localStorage.setItem("username", "username");
      getData.setUser(true); 
    }
  };

  React.useEffect(() => {
    localStorage.removeItem("notFound");
  });

  return (
    <>
      <h3 className="text-warning">
        {localStorage.getItem("notFound") &&
          "if you want read articles then you must have to login"}
      </h3>
      <button onClick={register} className="btn btn-primary">
        {localStorage.getItem("username") ? "Log Out" : "Log In"}
      </button> 
    </>
  );
};
