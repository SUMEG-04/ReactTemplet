import React from "react";
import { useParams,useLocation} from "react-router-dom";

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    return (<>
        <h1>This is User {fname} {lname} page</h1>
        <p>My current location is {location.pathname}</p>
    </>);
}

export default User;