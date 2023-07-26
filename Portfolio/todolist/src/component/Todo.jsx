import React from 'react'
import  img from '../image/image.png';
import { useState } from 'react';


const Todo = () => {
  const [inputData,setInputData]=useState('');
  const [item,setItem]=useState([]);
  const addItem=()=>{
    if(!inputData){

    }
    else{
      setItem([...item,inputData]);
      setInputData("");
    }
  }
  const deleteItem=(id)=>{
    const updateitems=item.filter((ele,ind)=>{
      return ind != id;
    });
    setItem(updateitems);
  }
  return (
    <div>
      <div className="main-div">
          <div className="child-div">
              <figure>
                <img src={img} alt="logo" style={{height:"200px"}} />
                <figcaption>Add your list here</figcaption>
              </figure>
              <div className="addItems">
                <input type="text" placeholder='Add Items...' onChange={(event)=>{setInputData(event.target.value)}} value={inputData} />
                <i className="fa-solid fa-plus add-btn" title='Add Item' onClick={addItem}></i>
              </div>
              <div className="showItem">

                {
                  item.map((elem,index)=>{
                    return(
                      <div className="eachItem" key={index}>
                      <h3>{elem}</h3>
                      <i className="fa-solid fa-trash add-btn" title='Delete Item' onClick={()=>deleteItem(index)}></i>
                      </div>
                    )
                  })
                }
                
              </div>
              <div className="shoeItem">
                <button className="btn-effects" data-sn-link-text="Remove All" onClick={()=>{setItem([])}}><span>Check List</span></button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Todo
