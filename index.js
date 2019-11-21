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
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button class="btn btn-primary">Submit</button>
      </div>
    );
  }
}

render(<Counters />, document.getElementById('root'));
