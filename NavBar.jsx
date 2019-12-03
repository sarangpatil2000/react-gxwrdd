import React, {Component} from "react";
import Render from "react-dom";

class NavBar extends Component{
  render(){
    return(
    <nav className="navbar navbar-light bg-light navbar-brand">
    <span className='badge badge-primary'>{this.props.number}</span>
    </nav>
    )
  }
}
export default NavBar;