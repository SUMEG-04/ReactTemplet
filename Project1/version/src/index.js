import React from 'react';
import ReactDOM from 'react-dom';

const fname="Sumeg";
const lname="Sharnagat";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>
      my first name is {fname} and my last name is {lname}
    </h1>
    <p>Current Date is ={currDate}</p>
    <p>Current Time is ={currTime}</p>
  </>,
  document.getElementById('root')
);