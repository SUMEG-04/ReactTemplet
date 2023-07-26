import React, { createContext, useEffect, useState } from 'react';
import CompA from './CompA';

const Firstname=createContext();
const Lastname=createContext();

const App=()=>{

  const [num,setnum]=useState(0);
  const [nums,setnums]=useState(0);

  useEffect(()=>{
    alert("i m clicked");
  },[num]);

  return (
    <>
      <Firstname.Provider value={"Sumeg"}>
        <Lastname.Provider value={"sharnagat"}>
        <CompA/>
        </Lastname.Provider>
      </Firstname.Provider>
      <button onClick={()=>{
        setnum(num+1)
        }}>Click Me {num}</button>
        <button onClick={()=>{setnums(nums+1)}}>Submission {nums}</button>
    </>
  );
}

export default App;
export {Firstname,Lastname};