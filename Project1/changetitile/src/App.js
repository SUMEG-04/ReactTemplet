import React, { useState } from "react";

const  App=()=>{
  const [num,setnum]=useState(0);

  document.title=`You clicked button ${num} times`;

  return(
    <>
      <button onClick={()=>{setnum(num+1)}}>Click Me {num}</button>
    </>
  );
}

export default App;