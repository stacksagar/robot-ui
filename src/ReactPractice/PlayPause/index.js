import React from "react";
import FuncAutoCount from "./FuncAutoCount";
import ClassAutoCount from "./ClassAutoCount";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PlayPause = () => {
  const [isOpen,setIsOpen]=React.useState(true)
  const setValue=()=>{
    setIsOpen(false)
  }
  return (
    <Router>
      <div style={{ height: "100vh", width: "100%" }} className="bg-dark p-5">
        <div className="p-2 bg-info d-flex justify-content-center">
          <Link onClick={setValue} to="/class-component" className="btn btn-light btn-sm mx-2">
            Go Class Component
          </Link>
          <Link onClick={setValue} to="/function-component" className="btn btn-light btn-sm mx-2">
            Go Function Component
          </Link>
        </div>
        { isOpen && <FuncAutoCount />}

        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "75vh", width: "100%" }}
        > 
          <Switch>  
            <Route path="/function-component">
              <FuncAutoCount />
            </Route>
            <Route path="/class-component">
              <ClassAutoCount />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default PlayPause;
