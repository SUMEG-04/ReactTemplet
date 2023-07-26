import React, { useState } from "react";
import Header from "./Header";
import Createnote from "./Createnote";
import Notes from "./Notes";
import Footer from "./Footer";
import "./App.css";

const App=()=>{

    const[addItem,setAddItem]=useState([]);

    const addNote=()=>{
        setAddItem((prevData)=>{
            return[...prevData,note];
        })
    };

    const onDelete=(id)=>{
        setAddItem((olddata)=>{
            olddata.filter((currdata,indx)=>{
                return indx !=id;
            })
        })
    }

    return (
        <>
        <Header/>
        <Createnote passNote={addNote}/>
        <Notes/>
        {addItem.map((val,index)=>{
            return<Notes 
            key={index} 
            id={index} 
            title={val.title} 
            content={val.content}
            deleteItem={onDelete}
             />
        })}
        <Footer/>
        </>
    );
}

export default App;