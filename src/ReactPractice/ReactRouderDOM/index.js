import React from "react";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SinglePost from "./SinglePost";
import { Login } from "./Register";
export const hasUserToggle = React.createContext();
export default function ReactRouterDOM() {
  const [hasUser, setHasUser] = React.useState(false);

  const setUser = (bool) => {
    setHasUser(bool);
  };

  return (
    <BrowserRouter>
      <hasUserToggle.Provider value={{hasUser,setUser}}>
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            background: "#333333",
            color: "#fff",
          }} >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={SinglePost} />

            <Route exact path={`/${localStorage.getItem("username") ? 'logout':'login'}`} component={Login} />
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </hasUserToggle.Provider>
    </BrowserRouter>
  );
}
