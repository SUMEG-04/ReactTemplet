import React, { useState } from 'react';
import { questions } from './api';
import './accordion.css';
import Myaccordion from './Myaccordion';
const Accordion=()=>{
    const [data,setData]=useState(questions);
    return(
        <>
            <div className='center-div'>
            <section className='main-div'>
            <h1>Placement Questions</h1>
            {data.map((currElem)=>{
                const {id}=currElem;
                return <Myaccordion key={id} {...currElem}/>
            })}
            </section>
            </div>
        </>
    );
};

export default Accordion;