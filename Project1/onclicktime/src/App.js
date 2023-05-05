import React,{useState} from 'react';
import './App.css';
const App=()=>{
  let newTime=new Date().toLocaleTimeString();

  const [currtime,settime]=useState(newTime);
  const updatetime=()=>{
    newTime=new Date().toLocaleTimeString();
    settime(newTime);
  };
  setInterval(updatetime,1000);
  return(
    <>
    <h1>Real Time Clock</h1>
      <h1>{currtime}</h1>
    </>
  );
}

export default App;