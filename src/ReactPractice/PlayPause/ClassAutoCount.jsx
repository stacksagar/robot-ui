import React, { Component } from "react";

export default class ClassAutoCount extends Component {
  state = {
    count: 0,
    isCounting: true,
  };

  intervalRef = React.createRef();

  interval = () => {
    if (this.state.isCounting) {
      this.intervalRef = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 600);
    }
    this.setState({ isCounting: false });
  };

  clearInterVal = () => {
    clearInterval(this.intervalRef);
    this.setState({ isCounting: true });
  };

  componentDidMount() {
    this.interval();
    this.setState({ isCounting: false });
  }

  componentWillUnmount() {
    this.setState({ isCounting: false })
  }
  

  render() {
    return (
      <div className="bg-dark p-5 d-flex flex-column justify-content-center align-items-center" >
        <h4 className="mb-3 text-info">This is (Class) Comnponent</h4>
        <h4 className="text-light">
          Value is <strong className="text-warning">{this.state.count}</strong>
        </h4>
        <div>
          <button
            onClick={this.clearInterVal}
            className="btn btn-warning btn-lg m-1"
          >
            Pause
          </button>
          <button
            onClick={this.interval}
            className="btn btn-warning btn-lg m-1"
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}
