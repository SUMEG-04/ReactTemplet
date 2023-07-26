import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CompB=()=>{
    const [name,setname]=useState([]);
    useEffect(()=>{
        async function getData(){
            const res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`);
            const data=await res.json();
            setname(data.results);
        }
        getData();
    },[]);

    
    
    return (<>
    
    <div className="card-container">
    {name.map((pokemon) => (
  <div key={pokemon.name} className="card">
    <h2>{pokemon.name}</h2>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      alt="not found"
    />
  </div>
))}
      </div>
    </>);
}

export default CompB;