import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../Forms/Forms.css';


const SignUp = () => {
   return (   
       <div align="center"> 
         
        <h2>Sign Up</h2>
        <br/>
        <form>
            <div>
            <label>First Name</label><br/>
            <input
                type="name" 
                name="name" 
                id="name" />
            </div>
            <div>
                <label>Last Name</label><br/>
                <input 
                    type="sname" 
                    name="surname" 
                    id="surname" 
                    />
            </div>
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
            <div>
                <label>Confirm Password</label><br/>
                <input
                type="password"
                name="cPass"
                id="cPass"
                />
            </div>
        </form>
        <br/>
        <ReactBootStrap.Button> Sign Up </ReactBootStrap.Button>
        </div>
    );
}

export default SignUp;