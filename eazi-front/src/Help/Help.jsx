import React from 'react';
import './Help.css';
// import '../Forms/Forms.css';
import * as ReactBootStrap from 'react-bootstrap';

const Help = (props) => {

    var questions = [{_id: 1, quest: 'What is Eazi4u?'}, {_id: 2, quest: 'How is it done?'}];

    var answers = ['Eazi4u is an online recruitment procedure whereby companies filter and select their desired candidates', 'Like this'];

    const handleAlert = () => { 
        alert("Thank you, your query has been submitted! One of our members will get back to you shortly."); 
    }

    const faqs = questions.map((item) => {
        return (
            <div key={item._id}>
                <li>{item.quest}</li>
            </div>
        );
    })

    return (
        <div className='container-fluid'>
            <h1><b>FAQ's</b></h1>
            {faqs}
            <h2 style={{paddingTop:'30px', paddingBottom:'30px'}}><b>Submit a query</b></h2>
            <div className='form-cont' style = {{borderColor: 'white'}}>
                <input type='email' placeholder='E-mail'/>
                <input placeholder='Reason'/>
                <textarea placeholder='Message'/>
                <form onSubmit={handleAlert}>
                    <ReactBootStrap.Button type="submit">Send</ReactBootStrap.Button>
                </form>
                
            </div>
        </div>
    );
}

export default Help;