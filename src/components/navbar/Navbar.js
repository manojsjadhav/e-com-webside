import React from 'react'
import "./Navbar.css"
import logo from "../../image/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
         <div className='img-conte'>
            <img src={logo} alt="logo" />
         </div>
         <ul className='link-conte'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
            <Link to="/login"><button className='btn'>Login</button></Link>
            <Link to="register"><button className='btn'>Sign up</button></Link>
         </ul>
    </div>
  )
}

export default Navbar