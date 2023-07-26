import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return (<>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/user/sumeg/sharnagat"}>User</NavLink>
    </>);
}

export default Menu;