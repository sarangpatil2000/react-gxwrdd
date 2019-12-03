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

handleIncrement=(counter)=>{
  const newValue = this.state.counterList.filter(c=>c.id == counter.id)[0].valueSet+1;
  this.state.counterList.filter(c=>c.id == counter.id)[0].valueSet = newValue;
  this.setState(this.state.counterList);
}

handleDelete =(counter)=>{
   const counterList = this.state.counterList.filter(c=>c.id != counter.id);
   this.state.counterList = counterList;
   this.setState(counterList);
  }

render(){
  return(
    <div>
    <span className='badge badge-primary m-2'>{this.state.counterList.filter(c=>c.valueSet > 0).length}</span>
    {this.state.counterList.map(counter => 
    <Counter key={counter.id} counterItem={counter}
    onIncrement={this.handleIncrement}
    onDelete={this.handleDelete}/>)}
    </div>
  )
}
}
export default Counters;