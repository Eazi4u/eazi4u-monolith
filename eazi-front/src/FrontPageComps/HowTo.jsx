import React from 'react';
import './howTo.css';
import { MDBCol, MDBRow } from 'mdbreact';

const HowTo = (props) => {


    return (
        <p className="text">
            <h1>
                <strong>This is the process you go through in {props.name}</strong>
            </h1>
            <MDBCol>
                <MDBRow>
                    - Sign Up on Eazi4u
                </MDBRow>
                |
                <MDBRow>
                    - Update your profile
                </MDBRow>
            </MDBCol>

        </p>
    );

}

export default HowTo;