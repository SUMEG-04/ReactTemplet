import React, { useState } from 'react';


const App=()=>{
  const purple="linear-gradient(to right, #df3e9c,#4bf7da)";
  const [bg,setbg]=useState(purple);
  const [name,setName]=useState("Click Me 🙂 ");
  const bgChange=()=>{
    let newBg="linear-gradient(to right,#8e44ed, #1114c4)";
    setbg(newBg);
    setName('Horrah! 👏');
    
  }
  const bgBack=()=>{
    setbg(purple);
    setName('BAck again 👍');
  }
  return(
    <>
      <div style={{background:bg}}>
        <button onClick={bgChange} onDoubleClickCapture={bgBack}>{name}</button>
      </div>
    </>
  );
}

export default App;