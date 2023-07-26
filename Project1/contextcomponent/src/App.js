import React, { createContext } from "react";
import CompA from "./CompA";

const Firstname=createContext();
const Lastname=createContext();

const App=()=>{

  return(
    <>
      <Firstname.Provider value={"sumeg"}>
      <Lastname.Provider value={"sharnagat"}>
      <CompA/>
      </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
}

export default App;
export {Firstname,Lastname};