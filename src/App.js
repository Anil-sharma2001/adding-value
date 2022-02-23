import React, { Component } from "react"
import Counters from "./component/counters"
import Nevbar from "./component/nevbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  
  handleDelete = (count) => {
    const counters = this.state.counters.filter((c) => {
      console.log(
        c.id,
  
        count
      );
      return c.id !== count;
    });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      
      c.value =0;
  
      return c;
    });
    this.setState({ counters });
  };
  handlerEvent = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index]={...counter};
    counters[index].value++;
    this.setState({ counters });
  };
  render() { 
    return (
    
      <div>
       <Nevbar
       totalCounters={this.state.counters.filter(c=>c.value>0).length}
       />
       <Counters 
       onIncrement={this.handlerEvent}
       onDelete={this.handleDelete}
       onReset={this.handleReset}
       counter={this.state.counters}
       />
      </div>
    );
  }
}
 
export default App;
