import React, {useState} from 'react';
import "./App.css"

const App=()=>{

  const [name,newName]=useState("");
  const [showName,getName]=useState();

  const setName=()=>{
    getName(name);
  };

  const eventCall=(event)=>{
    newName(event.target.value);
  }
  
  return(
    <>
      <div>
        <h1>Hello {showName}</h1>
        <input type='text' placeholder='Enter your name' onChange={eventCall} value={name}/>
        <button onClick={setName}>Click me</button>
      </div>
    </>
  );
}

export default App;