import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="photo" />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        {/* bootstrap class */}
        <button className="btn btn-secondary btn-sm">Increment</button>
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
