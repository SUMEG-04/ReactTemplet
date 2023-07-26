import React from "react";
import web from '../images/img.jpeg';
import { NavLink } from "react-router-dom";
import Common from "../Common";

const Home=()=>{
    return(<>
        <Common name='Grow your business with' imgsrc={web} visit='/service' btname='Get started' />
    </>);
}

export default Home;