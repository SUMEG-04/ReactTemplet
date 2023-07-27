import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

const Component = () => {
    const [name,setName]=useState([]);
    const [colors, setColors] = useState([]);
    const [move,setmove]=useState();
    const [type,settype]=useState();
    const [weight,setweight]=useState();
    const [pokemon,setPokemon]=useState();
    const [selectedCardId, setSelectedCardId] = useState(1); // State variable to store the selected card ID

    
    useEffect(()=>{
        async function getData(){
            const res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
            const data=await res.json();
            setName(data.results);
        }
        getData();
        async function getdata(){
          const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedCardId+1}`);
          setPokemon(res.data.name);
          setmove(res.data.moves.length);
          settype(res.data.types[0].type.name);
          setweight(res.data.weight);
          
      }
      getdata();

    },[name]);

    const handleCardSelect = (id) => {
      setSelectedCardId(id);
      console.log(selectedCardId);
    };
    
  return (
    <div className='main-section'>
      <div className="section-1">
        <div className="part1">
          <div className="img">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedCardId+1}.png`} alt="" />
          </div>
          <div className="info">
          <h1>Name:{pokemon}</h1>
          <h1>Type:{type}</h1>
          <h1>Moves:{move}</h1>
          <h1>Weight:{weight}</h1>
          </div>
        </div>
        <div className="part2">
          <div className="info">
          <h1>Name:{pokemon}</h1>
          <h1>Type:{type}</h1>
          <h1>Moves:{move}</h1>
          <h1>Weight:{weight}</h1>
          </div>
          <div className="img">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedCardId+1}.png`} alt="" />
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="cards">
            {name.map((ele,id)=>{
                return(
                    <>
                    <ColorExtractor
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id + 1}.png`}
                getColors={colors => setColors(prevColors => [...prevColors, colors[1]])} />
                    <div className="card" key={id} style={{background:colors[id]}} >
                    <h2>{ele.name}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id+1}.png`} alt="not found" onClick={() => handleCardSelect(id)}/>
                    </div>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Component
