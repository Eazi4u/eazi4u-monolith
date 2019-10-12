import React from 'react';
import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardText, MDBCardBody, MDBCardImage} from 'mdbreact';
import PheloImg from '../AboutUs/phelo.jpg'
import AneleImg from '../AboutUs/mabheka.jpg'
import './AboutUs.css';


const AboutUs = (props) => {

    return (
        
        <div className='container-fluid' align='center'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBCard style={{padding: '10', height:'42rem', width:'30rem'}}>
                            <MDBCardImage className='img-fluid' src={PheloImg} />
                                <MDBCardText><strong>Phelo Macanda (Co-Founder & CEO)</strong></MDBCardText> 
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={{padding: '10', width: '30rem'}}>
                            <MDBCardImage className='img-fluid' src={AneleImg} />
                            <MDBCardText><strong>Anele Chila (Co-Founder & CTO)</strong></MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default AboutUs;