import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import './Profile.css';

class CandidateProfile extends Component {

    constructor(props){
        super(props);  
        this.state = {
            name: "Phelo",
            surname: "Macanda"
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="prof">
                    <h2 color='blue'> Profile of {this.state.name + ' ' + this.state.surname} </h2>
                </div>

                <div className="image">
                    <MDBIcon far icon="address-card" size='5x'/>
                </div>
            </React.Fragment>
        );
    }
}

export default CandidateProfile;
