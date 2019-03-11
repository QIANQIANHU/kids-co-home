import React, { Component } from "react";
import { link } from "fs";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  //in state object we add one more property tags,in this array we will dynamically rerendering each string in an unordered list
  //not as Angular which is a templating engine,  React is just a simple ayntax, get JavaScript code compelied into React element
  //<span></span> is a React element, JSX doesn't have the concept of Loops,
  //You cannot use a general expression as the React element type. If you do want to use a general expression to indicate the type of the element, just assign/embed it to a curly braces
  //You can put any valid JavaScript expression inside the curly braces in JSX

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  //constructor() {
  //super();
  // to get access to parents
  // this.handleIncrement = this.handleIncrement.bind(this);
  //set the value of this in bind method, will return a new instance of the handleIncrement function, now in the handleIncrement function, this is always refering currenct object.
  //this.handleIncrement.bind(this);now doesn't mmatter how function is called(with object or not), refering current object
  //now reset the handleIncrement function like this.handleIncrement = this.handleIncrement.bind(this);
  //another way to solve this is to write arrow function
  //}
  //handleIncrement() {
  // console.log("increment Clicked", this);
  //we don't have access to this(the state property),define how function is called in JavaScript, the behavior here is different from other languages
  //this can refer to different objects
  //obj.method();
  //function();without an object return undefined
  //use bind() method to solve this problem,or
  //arrow function
  // handleIncrement = () => {
  //   console.log("increment Clicked", this);
  // };
  //}
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //unlike in Angular, the ++ update is not automatically detective, we use setState method to tell React what to change, in() we pass the count property, merged, will overwrite the prpoperty if its already exsited.

  render() {
    console.log("props", this.props);
    return (
      <div>
        <img src={this.state.imageUrl} alt="photo" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* eventHandling onClick is like an attribute of react elements, is
        upcase sensetive */}
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // in conditional rendering: true && string output is "string" if string is not null;true && 'string' && 1 output is 1 if number is not 0;
  // "",0 is equal to false, if all conditions are true, print the last one
  //   render() {
  //     return (
  //       <div>
  //         {this.state.tags.length === 0 && "1"}
  //         {this.renderTags()}
  //       </div>
  //     );
  //   }
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
