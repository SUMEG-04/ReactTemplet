import React from 'react';
import { Route,Routes, useLocation } from 'react-router-dom';
import About from './COmponents/About';
import Contact from './COmponents/Contact';
import Services from './COmponents/Services';
import User from './COmponents/User';
import Error from './COmponents/Error';
import Menu from './Menu';
import { useNavigate} from "react-router-dom";

const App=()=>{
  const location=useLocation();
    const history=useNavigate();
  return (<>
  <button onClick={()=>{history(-1)}}>GO back</button> 
  <Menu/>
  <Routes>
    <Route exact path='/' element={<About></About>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/user/:fname/:lname' element={<User/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/user' element={<User/>}/>
    <Route exact path='/*' element={<Error/>}/>
  </Routes>
  </>);
}

export default App;