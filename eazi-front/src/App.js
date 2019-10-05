import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";
import Main from './FrontPageComps/Main';
import SignIn from '../src/Forms/SignIn';
import Interviews from '../src/InterviewScheduler/Interviews';

class App extends Component {

  state = {
    showMain: true,
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  
  changeState = () => {return this.setState({showMain: false})};
  changeAnotherState = () => {return this.setState({showMain: true})};

  render() {
    const navStyle = { marginTop: "0rem" };
    const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("navbarCollapse")}
            />
    );

    return (
      <div>
        <Router>
        <div>
          <MDBNavbar style={navStyle} dark expand="md" fixed="top" color="indigo">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">Eazi4u</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                 <LinkContainer to={'/'}>
                  <MDBNavItem>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                </LinkContainer>
                <LinkContainer to={'/signIn'} className="mx-3">
                  <MDBNavItem>
                      <MDBNavLink to='/signIn'>Sign In</MDBNavLink>
                  </MDBNavItem>
                  </LinkContainer>
                  <MDBNavItem>
                    <LinkContainer to={'/interviews'}>
                      <MDBNavLink className="mx-3" onClick={this.changeState}> Interviews </MDBNavLink>
                    </LinkContainer>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <MDBIcon icon="search" />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </div>
         <Switch>
           <Route exact path='/' component={Main} />
           <Route path='/signIn' component={SignIn} />
           <Route path='/interviews' component={Interviews} />
         </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
