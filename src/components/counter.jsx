import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  //   in state object we add one more property tags,in this array we will dynamically rerendering each string in an unordered list
  // not as Angular which is a templating engine,  React is just a simple ayntax, get JavaScript code compelied into React element
  // <span></span>

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="photo" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* bootstrap class */}
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const qualityOfProduct = <h1>Zero</h1>;
    return count === 0 ? qualityOfProduct : count;
  }
}

export default Counter;
