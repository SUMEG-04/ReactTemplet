import React from "react";
import {useNavigate} from 'react-router-dom';

const Error=()=>{
  const navigate=useNavigate();
  return(<>
    <div className="artStyle">
    <h1>404 Error Page</h1>
    <p>Oppos! Page not found</p>
    <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  </>);
}

export default Error;