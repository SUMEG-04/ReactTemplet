import React from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Notes=(props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return (
        <>
        <div className="notes">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Button className="btn" onClick={deleteNote}><DeleteOutlineIcon className="deleteIcon"></DeleteOutlineIcon></Button>
        </div>
        </>
    );
}

export default Notes;