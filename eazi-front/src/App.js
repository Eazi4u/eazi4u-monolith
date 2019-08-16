import React, { Component } from 'react';
import './App.css';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Badge } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";
import './App.css';

class App extends Component {


  render(){
  
    return (
      <div className="App">
        <h1>Welcome to Eazi4u!</h1>
        <br/><br/>
        <SignIn/>
        <br/><br/>
        <SignUp/>
      </div>
    );
  }
}

export default App;
