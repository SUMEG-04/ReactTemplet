import React from "react";

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/400x300/?${props.name}`;
    console.log(img);
  return(<>
    <img src={img} alt="Notfound"/>
  </>);
}

export default Sresult;