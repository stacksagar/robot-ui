import React, { Component } from "react";
import A from "./A";

export const NameCont = React.createContext();
export const ProfCont = React.createContext();

export default class Context extends Component {
  render() {
    return (
      <div>
        <NameCont.Provider value="Sagar Roy">
          <ProfCont.Provider value="Programmer">
            <A />
          </ProfCont.Provider>
        </NameCont.Provider>
      </div>
    );
  }
}
