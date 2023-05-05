import React from 'react';

const SlotM=(props)=>{
  // let x= ':smile';
  // let y= ':smile';
  // let z= ':smile';

  // let x=props.x;
  // let y=props.y;
  // let z=props.z;

  let{x,y,z}=props;

  if((x===y) && (x===z) ){
    return(
      <>
        <div className='slot_inner'>
          <h1>{x} {y} {z}</h1>
          <h1>This is matching.</h1>
          <hr/>
        </div>
      </>
    );
  }
  else{
    return(
      <>
        <div className='slot_inner'>
          <h1>{x} {y} {z}</h1>
          <h1>This is not matching.</h1>
          <hr/>
        </div>
      </>
    );
  }
}


const App=()=>{
return(
  <>
    <h1>Welcome to <span style={{fontwidth:'bold'}}>Slot Machine</span></h1>
    <div className='slotmachine'>
    <SlotM x='😄' y='😄' z='😄'/>
    <SlotM x='😠' y='😆' z='🧑' />
    <SlotM x='🍎' y='🍎' z='🍎'/>
    </div>
  </>
);
}

export default App;