import React, {Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{
  render(){
    const {onIncrement, counterItem, onDelete} = this.props;
    return(
      <div>
      <span className="badge badge-primary m-2">{counterItem.valueSet}</span>
      <button className="btn btn-primary m-1" onClick={()=>onIncrement(counterItem)}>Increment</button>
      <button className="btn btn-danger m-1" onClick={()=>onDelete(counterItem)}>Delete</button>
      </div>
    )
  };

};
export default Counter;