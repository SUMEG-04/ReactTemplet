import React from "react";
import Menu from "./Menu";
import {Routes,Route} from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import User from "./Component/User";
import Services from "./Component/Services";
import Error from "./Component/Error";
import Search from "./Component/Search";
import './App.css'

const App=()=>{
  return(<>
    <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<Home></Home>}/>
      <Route exact path="/home" element={<Home></Home>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/user" element={<User/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/*" element={<Error/>}/>
    </Routes>
  </>);
}

export default App;