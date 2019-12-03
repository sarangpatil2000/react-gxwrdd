import React, { Component } from 'react';
import { render } from 'react-dom';
import Sarang from './Sarang';
import Counters from './Counters';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'sarang'
    };
  }

  render() {
    return (
      <React.Fragment>
        <Counters/>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
