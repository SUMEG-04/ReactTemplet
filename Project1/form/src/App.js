import React, { useState } from 'react';
import './App.css';

const App=()=>{

  const [fullName,setfullName]=useState({
    fname:"",
    lname:"",
    email:"",
    number:"",
  });

  const inputEvent=(event)=>{

    // const name=event.target.name;
    // const value=event.target.value;

    const {value,name}=event.target;

    setfullName((preValue)=>{
      if(name==="fname"){
        return{
          fname:value,
          lname:preValue.lname,
          email:preValue.email,
          number:preValue.number,

        };
      }
      else if(name==="lname"){
        return{
          fname:preValue.fname,
          lname:value,
          email:preValue.email,
          number:preValue.number,
        };
      }
      else if(name==="email"){
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email:value,
          number:preValue.number,
        };
      }
      else{
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email:preValue.email,
          number:value,
        };
      }
    });
    
  };
 
  const setValue=(event)=>{
    event.preventDefault();
  }

  return(
    <>
      <div className='main_div'>
        <form onSubmit={setValue}>
          <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.number}</p>
            <input type='text' placeholder='enter your name' name='fname' onChange={inputEvent} value={fullName.fname}></input>
            <input type='text' placeholder='enter your name' name='lname' onChange={inputEvent} value={fullName.lname}></input>
            <input type='email' placeholder='enter your email' name='email' onChange={inputEvent} value={fullName.email} autoComplete='off'></input>
            <input type='number' placeholder='enter your number' name='number' onChange={inputEvent} value={fullName.number}></input>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;