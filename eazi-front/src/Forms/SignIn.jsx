import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../Forms/Forms.css';


const FormIn = () => {

    return (
        
        <div align="center" className="form-control"> 
        <br/><br/><br/>
        <h2>Eazi4u - Sign In</h2>
        <br/> 
         <form>
             <div>
                 <label>E-mail</label><br/>
                 <input 
                     type="email" 
                     name="email" 
                     id="email" 
                     />
             </div>
             <div>
                 <label>Password</label> <br/>
                 <input
                 type="password"
                 name="password"
                 id="password"
                 />
             </div>
         </form>
         <br/>
         <ReactBootStrap.Button> Sign In </ReactBootStrap.Button>
         </div>
     );

}

export default FormIn;