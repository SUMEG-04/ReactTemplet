import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <div className='navbar'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        </div>
    </>
  )
}

export default Menu
