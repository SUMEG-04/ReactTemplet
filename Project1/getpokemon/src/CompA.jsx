import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { name } from "tar/lib/types";

const CompA=()=>{

    const [num,setnum]=useState(1);
    const [name,setname]=useState();
    const [move,setmove]=useState();
    const [type,settype]=useState();

    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setmove(res.data.moves.length);
            setname(res.data.name);
            settype(res.data.types[0].type.name);
        }
        getData();
    })

    const options = Array.from({ length: 200 }, (_, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ));
    
    return(
        <>
        <h1>Your selected choice is <span style={{color:'red'}}>{num}</span> </h1>
        <h1>Name:<span style={{color:'red'}}>{name}</span> </h1>
        <h1>Moves:<span style={{color:'red'}}>{move}</span></h1>
        <h1>Type:{type}</h1>
            <select  onClick={(event)=>{setnum(event.target.value);}}>
                {options}
            </select>
        </>
    );
}

export default CompA;