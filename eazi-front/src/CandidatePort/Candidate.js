import React from 'react';

const Candidate = (props) => {

    return (
      <p>
        {props.fName}, {props.category}, {props.expectedSalary}
      </p>  
    );
}

export default Candidate;