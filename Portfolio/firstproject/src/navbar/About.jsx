import React from "react";
import web from '../images/img.jpeg';
import Common from "../Common";

const About=()=>{
    return(<><Common name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now' /></>);
}

export default About;