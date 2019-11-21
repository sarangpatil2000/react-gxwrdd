import React, {Component} from 'react';
import {render} from 'react-dom';



class Sarang extends Component{
  constructor(){
    super();
    this.state = {
      name : "Sarang patil",
      count : 0
    };
  }
  handleChange = event => {
    this.setState({name : event.target.value});
  }
  handleButtonClicked(){
    this.setState({count : this.state.count + 1});
  }

render(){
  return(
    <div>
    <input  onChange={() => this.handleChange(event)}/>
    <h1>Hello {this.state.name}!</h1>
    <span className="badge badge-primary m-2">{this.state.count}</span>
    <button onClick={(event) => this.handleButtonClicked()} className="btn btn-primary">Increment</button>
    </div>
  );
};
};
export default Sarang;
