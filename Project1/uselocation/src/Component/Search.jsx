import React from "react";
import { useState } from "react";
import Sresult from "./Sresult";

const Search=()=>{
    const [img,setimg]=useState("");
  return(<>
  <br></br>
    <div className="search">
    <input type="text" placeholder="search" onChange={
        (event)=>{
            setimg(event.target.value);
        }} value={img}/>
    {img==="" ? null : <Sresult name={img}/>}
    </div>
  </>);
}

export default Search;