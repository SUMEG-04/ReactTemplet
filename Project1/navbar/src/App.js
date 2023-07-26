import React from 'react'
import {Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import "./App.css";

const  App=()=>{

  const Name=()=>{
    return <h1>My name Sumeg Sharnagat.</h1>
  }
  return(
    <>
    <Menu></Menu>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/name' element={<Name/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;