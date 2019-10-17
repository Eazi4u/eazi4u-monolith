import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './Forms.css';


const FormIn = () => {

    return (
        <div className='container-fluid' align='center'>
        {/* <MDBContainer> */}
            <MDBRow>
            <MDBCol size='3'>
                <div className="form-control" style={{width: '418%', borderColor: 'white'}}>
                    <MDBCard style={{ width: '30rem', height:'20rem'}}>
                        <h2><strong>Eazi4u - Sign In</strong></h2>
                        <hr />
                            <div>
                                <label><strong>E-mail</strong></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div>
                                <label><strong>Password</strong></label> 
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        <ReactBootStrap.Button style={{width: '150px', height: '40px', padding:'10'}}> Sign In </ReactBootStrap.Button>
                        <ReactBootStrap.Button variant="success" style={{width: '240px', height: '40px', padding: '10'}}> Continue With Google </ReactBootStrap.Button>
                    </MDBCard>
                </div>
            </MDBCol>
            </MDBRow>
        {/* </MDBContainer> */}
        </div>
    );

}

export default FormIn;