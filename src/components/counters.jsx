import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 8 },
      { id: 3, value: 3 },
      { id: 4, value: 3 }
    ]
  };

  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //...is to clone the array
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("event handler called", counterId);
    // this.setState({ value: this.state.value - 1 });
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //use filter method to get all the counters except the one with the given ID,C goes to c that id does not equal counter id
    this.setState({ counters });
    //set the state has an object we want to overwrite the counters property with this counters constant this.setState({counters:counters}), as the value are the same  we can simplify this code
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            //value={counter.value}
            //id={counter.id}
          >
            {/* <h4>Counter # {counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
