import React, {Component} from 'react';
import {render} from 'react-dom';
import Counter from './Counter';

class Counters extends Component{
constructor(){
  super()
  this.state={
    counterList : {

    }
  }
};

render(){
  return(
    <div>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </div>
  )
}
}
export default Counters;