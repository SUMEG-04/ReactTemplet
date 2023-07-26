import React from "react";

const Card=()=>{
    return (<>
        <h1>Your selected choice is <span style={{color:'red'}}>{}</span> </h1>
        <h1>Name:<span style={{color:'red'}}>{}</span> </h1>
        <h1>Moves:<span style={{color:'red'}}>{}</span></h1>
        <h1>Type:{}</h1>
           
        </>)
}

export default Card;