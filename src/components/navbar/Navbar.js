import React from 'react'
import "./Navbar.css"
import logo from "../../image/logo.svg"

const Navbar = () => {
  return (
    <div className='container'>
         <div className='img-conte'>
            <img src={logo} alt="logo" />
         </div>
         <ul className='link-conte'>
            <li>
                <a href="http://">Home</a>
            </li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
            <button className='btn'>Login</button>
            <button className='btn'>Sign up</button>
         </ul>
    </div>
  )
}

export default Navbar