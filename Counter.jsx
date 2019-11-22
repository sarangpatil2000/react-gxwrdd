import React, {Component} from 'react';
import {render} from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component{
    state ={
      value : this.props.value
    }
  

  handleClickEvent = event =>{
    this.setState({value:this.state.value + 1});
  }

  render(){
    console.log("Props", this.props);
    return(
      <div>
      <span className="badge badge-primary m-2">{this.state.value}</span>
      <button className="btn btn-primary m-1" onClick={()=>this.handleClickEvent(event)}>Increment</button>
      </div>
    )
  };

};
export default Counter;