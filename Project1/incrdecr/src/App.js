import React, { useState } from 'react';
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const App=()=>{

  const [num,setNum]=useState(0);

  const numIncr=()=>{
    setNum(num+1);
  };

  const numDecr=()=>{
    if(num>0){
      setNum(num-1);
    }
    else{
      alert("The value reached 0.");
    }
  }
  return(
    <>
      <div className='main_div'>
        <div className='heading'><h1>{num}</h1></div>
        <div className='section'>
        <button onClick={numIncr}><AddCircleIcon/></button>
        
        <button onClick={numDecr}>Decrm</button>
        </div>
      </div>
    </>
  );
}

export default App;