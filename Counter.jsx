import React, {Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{
  constructor(){
    super();
    this.state ={
      count : 0
    }
  };

  handleClickEvent = event =>{
    this.setState({count:this.state.count + 1});
  }

  render(){
    return(
      <div>
      <span className="badge badge-primary m-2">{this.state.count}</span>
      <button className="btn btn-primary m-1" onClick={()=>this.handleClickEvent(event)}>Increment</button>
      </div>
    )
  };

};
export default Counter;