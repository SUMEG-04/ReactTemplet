import React from "react";
import {NavLink} from 'react-router-dom'

const Menu=()=>{
    return(<>
        <div className="navbar">
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/search'}>Search</NavLink>
        <NavLink to={'/about'}>@boutUs</NavLink>
        <NavLink to={'/contact'}>contactUs</NavLink>
        <NavLink to={'/services'}>Service</NavLink>
        <NavLink to={'/user'}>User</NavLink>
        </div>
    </>)
}
export default Menu;