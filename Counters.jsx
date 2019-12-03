import React, {Component} from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import NavBar from './NavBar';

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
    <React.Fragment>
    <NavBar number={this.state.counterList.filter(c=>c.valueSet > 0).length}/>
    <main className="container">
    {this.state.counterList.map(counter => 
    <Counter key={counter.id} counterItem={counter}
    onIncrement={this.handleIncrement}
    onDelete={this.handleDelete}/>)}
    </main>
    </React.Fragment>
  )
}
}
export default Counters;