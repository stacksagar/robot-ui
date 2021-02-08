import React, { Component } from "react";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

export default class HOC extends Component {
  render() {
    return (
      <>
        <ClickCount />
        <br />
        <HoverCount /> 
      </>
    );
  }
}
