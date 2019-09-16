// This is our main front page for eazi4u :) 

import React, { Component } from 'react';
import SignIn from '../Forms/SignIn';
import HowTo from '../FrontPageComps/HowTo';
import Testimony from './Testimonials';
import Interviews from '../InterviewScheduler/Interviews';
import SignUp from '../Forms/SignUp';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Badge } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";
import '../App.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInterview: false
        }
    }

    state = {
        collapseID: ""
    };

    render() {
        return (
            <div id="classicformpage">
                <Router>
                    <MDBView>
                        <MDBMask className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer>
                                <MDBRow>
                                    <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                        <h1 className="h1-responsive font-weight-bold">
                                            Sign Up Now!{" "}
                                        </h1>
                                        <hr className="hr-light" />
                                        <h6 className="mb-4">
                                            Eazi4u is an online platform that connects companies and job seeking candidates
                                            to engage and set up interviews. Companies search for candidates and request
                                            interviews, a candidate that gets a job through our platform will receive R2000
                                            cash within a week after employment. Candidates must sign up and complete their
                                            profiles to receive requests from companies!
                                        </h6>
                                        <MDBBtn outline color="white">
                                            Learn More
                                        </MDBBtn>
                                    </div>
                                    <MDBCol md="6" xl="5" className="mb-4">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="z-depth-2 white-text" align="left">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Register:
                                                </h3>
                                                <div align="center"><MDBBtn color='indigo'><MDBIcon fab icon="google" />  Sign In with Google</MDBBtn></div>
                                                <hr className="hr-light" />
                                                <MDBInput label="Your name" icon="user" className="white-text" />
                                                <MDBInput label="Your email" icon="envelope" className="white-text" />
                                                <MDBInput
                                                    label="Your password"
                                                    icon="lock"
                                                    type="password"
                                                    className="white-text"
                                                />
                                                <div className="text-center mt-4 black-text">
                                                    <MDBBtn color="indigo">Sign Up</MDBBtn>
                                                    <hr className="hr-light" />
                                                    <div className="text-center d-flex justify-content-center white-label">
                                                        <a href="https://twitter.com/" className="p-2 m-2">
                                                            <MDBIcon fab icon="twitter" className="white-text" />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon fab icon="linkedin-in" className="white-text" />
                                                        </a>
                                                        <a href="#!" className="p-2 m-2">
                                                            <MDBIcon fab icon="instagram" className="white-text" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                    <MDBContainer>
                        <MDBRow className="py-5">
                            <MDBCol md="12" className="text-center">
                                <p>
                                    Eazi4u is an online platform that connects companies and job seeking candidates
                                    to engage and set up interviews. Companies search for candidates and request
                                    interviews, a candidate that gets a job through our platform will receive R2000
                                    cash within a week after employment. Candidates must sign up and complete their
                                    profiles to receive requests from companies!
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <HowTo name="Eazi4u"/>
                    <Testimony />
                    <Switch>
                        <Route path="/interviews" render={props => <Interviews className={this.state.showInterview} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Main;