import React from "react";

export default function AllFunctionality(GetComponent) {
  return class HigherOrderComponent extends React.Component {
    state = {
      count: 0,
    };

    increment = (val) => this.setState({ count: this.state.count + val });
    decrement = (val) => this.setState({ count: this.state.count - val });

    render() {
      return (
        <GetComponent
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    }
  };
}
