import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import react from "./react";
import node from "./node";
import referece from "./referece";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1 id="id1">"Learning" is fun!</h1>
            <ul className="header">
            <li><NavLink exact to="/">React</NavLink></li>
            <li><NavLink to="/node">Node JS</NavLink></li>
            <li><NavLink to="/reference">References</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={react}/>
                <Route path="/node" component={node}/>
                <Route path="/reference" component={referece}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
  
 
export default Main;