import React, {Component} from 'react';
import {render} from 'react-dom';
import Counter from './Counter';

class Counters extends Component{
constructor(){
  super()
  this.state={
    counterList : [
      {id:0, valueSet:4},
      {id:1, valueSet:0},
      {id:2, valueSet:40},
      {id:3, valueSet:0},
      ]
  }
};

render(){
  return(
    <div>
    {this.state.counterList.map(counter => 
    <Counter key={counter.id} value={counter.valueSet} selected={true}/>)}
    </div>
  )
}
}
export default Counters;