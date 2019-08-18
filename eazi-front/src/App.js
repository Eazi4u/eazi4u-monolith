import React, { Component } from 'react';
import './App.css';
// import './fonts/index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './FrontPageComps/Main';

class App extends Component {

  state = {
    signIn: false
  }

  render(){
    
    return (
      <div>
        <Main />
        {/* <Router>
          <Switch>
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
