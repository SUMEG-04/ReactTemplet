import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom';
import './App.css';

const ToDOList=()=>{

    const [item,setItem]=useState("");
    const [newItem,setNewItem]=useState([]);

    const addList=()=>{
        setNewItem((prevValue)=>{
            return [...prevValue,item]
        });
        setItem("");
    };

    const itemEvent=(event)=>{
        setItem(event.target.value);
    }
    
    return (
        <>
            <div className='main_div'>
            <div className='center_div'>
                <br></br>
                <h1>To DO list</h1>
                <br/>
                <input type='text' placeholder='add an item' onChange={itemEvent} value={item}/>
                <Button className='newBtn' onClick={addList}><AddIcon/></Button>
                <br/>
                <ol>
                    {newItem.map((val,index)=>{
                        return <ListCom key={index} text={val}/>
                    })}
                </ol>
                <br/>
            </div>
            </div>
        </>
    );
};

export default ToDOList;