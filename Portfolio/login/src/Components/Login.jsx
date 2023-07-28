import React from 'react';
import img from '../image/img.jpg'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <div className="main-section">
            <div className="left-section">
                <img src={img} alt="not found" />
            </div>
            <div className="right-section">
                <form className='form' action="">
                    <div className="form">
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder='user name' />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='password' name="" id="" />
                    <br></br>
                    <a className='forgot' href="http://" target="_blank" rel="noopener noreferrer">forgot password?</a>
                    </div>
                    <div className="btn">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
