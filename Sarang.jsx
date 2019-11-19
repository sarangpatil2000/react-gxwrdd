import React, {Component} from 'react';
import {render} from 'react-dom';



class Sarang extends Component{
  constructor(){
    super();
    this.state = {
      name : "Sarang patil"
    };
  }
  handleChange(event){
    this.setState({name : event.target.value});
};
render(){
  return(
    <div>
    <input  OnChange={(event) => this.handleChange(event)}/>
    <h1>Hello {this.state.name}!</h1>
    </div>
  );
}
}
export default Sarang;
