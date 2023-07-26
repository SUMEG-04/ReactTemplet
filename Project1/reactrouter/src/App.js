import React from "react";
import { Route,Routes} from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Error from "./Error";

const App=()=>{

  const Name=()=>{
    return <h1>It is a name page </h1>
  }

  return(
    <Routes>
      <Route exact path="/" element={<Aboutus/>}/>
      <Route exact path="/contact" element={<Contactus/>}/>
      <Route path="/contact/name" element={<Name/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
  );
}

export default App;