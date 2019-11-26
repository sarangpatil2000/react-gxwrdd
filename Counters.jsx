import React, {Component} from 'react';
import {render} from 'react-dom';
import Counter from './Counter';

class Counters extends Component{
constructor(){
  super()
  this.state={
    counterList : [
      {id:0, valueSet:0},
      {id:1, valueSet:1},
      {id:2, valueSet:50},
      {id:3, valueSet:0},
      ]
  }
};


onIncrement=(id)=>{
  const newValue = this.state.counterList.filter(c=>c.id == id).valueSet+1;
  this.state.counterList[id].valueSet = newValue;
  this.setState({this.state.counterList});
}

handleDelete =(clickedButtonNo)=>{
    const counterList = this.state.counterList.filter(c=>c.id!=clickedButtonNo);
    this.setState({counterList});
  }

render(){
  return(
    <div>
    {this.state.counterList.map(counter => 
    <Counter key={counter.id} onDelete={this.handleDelete} counterItem={counter} value={counter.valueSet}
    onIncrement={this.handleIncrement{counter.id}/>)}
    </div>
  )
}
}
export default Counters;