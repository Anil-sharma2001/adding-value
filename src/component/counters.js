import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-warning btn-li ">
          reset
        </button>
        {this.props.counter.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}
export default Counters;