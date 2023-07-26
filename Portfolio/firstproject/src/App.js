import React from "react";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./navbar/Home";
import About from "./navbar/About";
import Contact from "./navbar/Contact";
import Services from "./navbar/Services";
import Error from "./navbar/Error";
import './App.css';

const App=()=>{
  return(<>
    <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
      <Route exact path="/*" element={<Error/>}></Route>
    </Routes>
  </>);
}

export default App;