import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Createnote=()=>{

    const [expand,setExpand]=useState(false);

    const [notes,setNotes]=useState({
        title: "",
        content: "",
    });

    const inputEvent=(event)=>{

        const {name,value}=event.target;

        setData((preData)=>{
            return{
                ...preData,
                [name]:value,
            }
        });
    };

    const addEvent=()=>{
        props.passNotes(notes);
        setNotes({
            titile:"",
            content:"",
        });
    }

    const expandIt=()=>{
        setExpand(true);
    }

    const back=()=>{
        setExpand(false);
    }

    return (
        <>
        <div className="creation" onDoubleClick={back}>
            <form>
                {expand?
                <input 
                type="text" 
                placeholder="title" 
                onChange={inputEvent} 
                name="title" 
                value={notes.title} 
                /> : null}

                <textarea 
                rows="" 
                columns="" 
                placeholder="enter your notes" 
                onChange={inputEvent} 
                name="content" 
                value={notes.content}
                onClick={expandIt} >
                </textarea>

                {expand?
                <Button onClick={addEvent}>
                <AddIcon></AddIcon>
                </Button> : null}

            </form>
        </div>
        </>
    );
}

export default Createnote;