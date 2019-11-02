import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import './Candidate.css';
import Profile from './CandidateProfile/Profile';

class Candidate extends Component {

    constructor(props) {
      super(props);

      this.state = {
        show: false
      };
    }

    showStates = () => {
      this.setState({
          show: !this.state.show 
      })
    }

    render(){

      return (
        <React.Fragment>
          <div className='anyCandidate'>
            {this.props.fName}, {this.props.category}, {this.props.expectedSalary}
            {/* <MDBBtn color='blue' onclick={this.showStates}>Profile</MDBBtn> */}
            <Profile />
          </div>  
        </React.Fragment>
      );
    }
    
}

export default Candidate;