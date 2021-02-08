import React, { Component } from "react";
import HOC from "../HOC";
import Brand from "./Brand";
import CreatePort from "./CreatePort";
import Error from "./Error";
import GetPropsValue from "./GetPropsValue";

export default class Practice extends Component {
  state = {
    value: 10,
  };

  incrementValue = () => {
    this.setState({ value: this.state.value + 1 });
  };

  brandRef = React.createRef();
  componentDidMount() {
    console.log(this.brandRef.current.children[1]);
  }

  render() {
    return (
      <div>
        <GetPropsValue
          allProps={{ value: this.state.value, increment: this.incrementValue }}
        />

        <br />
        <br />

        <HOC />
        <Error>
          <Brand ref={this.brandRef} brand="Google" />
        </Error>
        <Error>
          <Brand brand="Apple" />
        </Error>
        <CreatePort />
      </div>
    );
  }
}
