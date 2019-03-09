import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    const qualityOfProduct = <h1>Zero</h1>;
    return count === 0 ? qualityOfProduct : count;
  }
}

export default Counter;
