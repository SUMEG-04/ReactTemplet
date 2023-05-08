import React,{useState} from 'react';
import './App.css';

const App=()=>{

  const [name,newName]=useState("")
  const [fullname,setName]=useState();
  const [lastName,setSurname]=useState();
  const [yourName,setYourname]=useState();

  const getName=(event)=>{
    newName(event.target.value);
  }

  const updateName=(event)=>{
    event.preventDefault();
    setName(name);
    setYourname(lastName);
  }

  const getSurname=(event)=>{
    setSurname(event.target.value);
  }


  return(
    <>
      <div className='main_div'>
      <form onSubmit={updateName}>
      <div>
        <h1>Hello {fullname} {yourName}</h1>
        <input type='text' placeholder='Enter your name' onChange={getName} value={name}/>
        <input type='text' placeholder='Enter your last name' onChange={getSurname} value={lastName}/>
        <button type='submit'>Submit</button>
      </div>
      </form>
      </div>
    </>
  );
}

export default App;