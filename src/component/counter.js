import React, { Component } from "react";
import "./counter.css";


class Counter extends Component {
 
  style = {
    fontSize: 50,
    margin: 10,
  };
  render() {
    const {onReset,onDelete,onIncrement}=this.props;
    return (
      <div>
      <span style={this.style} className="dan">
          {this.props.value}
        </span>
        <button className="btn btn-dark btn-sm m-2"
         onClick={()=>onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() =>onDelete(this.props.id)}
        >
          delete
        </button>
      </div>
    );
  }
}

export default Counter;
