import { createRoot } from 'react-dom/client';
import React from 'react';
import Netflix from './Netfilx';
import './index.css';
import Amazon from './Amazon';

const favseries="netflix";

// const FacvS=()=>{
//   if(favseries==="netflix"){
//     return <Netflix/>;
//   }
//   else{
//     return <Amazon/>;
//   }
// };


// function ncard(val){
//   return(
//     <Card 
//     key={val.id}
//     imgsrc={val.imgsrc}  
//     sname={val.sname} 
//     title={val.title}
//     link={val.link} 
//     />
//   );
  
// }


createRoot(document.getElementById('root')).render(<>

  <h1 className='heading_style'>List of top Series of 2020</h1>
  {/* <FacvS /> */}
  {/* <div className='holder'>{Sdata.map(ncard)}</div> */}
  
  {(favseries==="netflix") ? <Netflix/> : <Amazon/> }
  </>);