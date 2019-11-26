import React, {Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{
  render(){
    return(
      <div>
      <span className="badge badge-primary m-2">{this.props.counterItem.valueSet}</span>
      <button className="btn btn-primary m-1" onClick={()=>this.props.onIncrement(this.props.counterItem)}>Increment</button>
      <button className="btn btn-danger m-1" onClick={()=>this.props.onDelete(this.props.counterItem)}>Delete</button>
      </div>
    )
  };

};
export default Counter;