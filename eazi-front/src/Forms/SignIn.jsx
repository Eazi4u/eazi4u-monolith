import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { MDBCard, MDBCol } from 'mdbreact';
import '../Forms/Forms.css';


const FormIn = () => {

    return (
        
        <div align="center" className="form-control"> 
        <br/><br/><br/>
        <MDBCol>
        <MDBCard style={{width:'30rem'}}>
        <br/>
        <h2>Eazi4u - Sign In</h2>
        <hr/> 
         <form>
             <div>
                 <label><strong>E-mail</strong></label><br/>
                 <input 
                     type="email" 
                     name="email" 
                     id="email" 
                     />
             </div>
             <div>
                 <label><strong>Password</strong></label> <br/>
                 <input
                 type="password"
                 name="password"
                 id="password"
                 />
             </div>
         </form>
         <br/>
         <ReactBootStrap.Button width='10'> Sign In </ReactBootStrap.Button>
         </MDBCard>
         </MDBCol>
         </div>
     );

}

export default FormIn;