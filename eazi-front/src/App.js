import React, { Component } from 'react';
import './App.css';
// import './fonts/index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './FrontPageComps/Main';

class App extends Component {

  state = {
    showMain: false
  }

  render(){
    
    return (
      <div>
        {/* <Main>
          <Router>
            <Switch>

            </Switch>
          </Router>
        </Main> */}
        <Main />
      </div>
    );
  }
}

export default App;
