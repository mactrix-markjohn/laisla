import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container whitenav'>
        <Link to={'/laisla'}><img src={logo} alt='' className='logo' /></Link>
        <ul>
        <Link to={'/laisla'}><li>HOME</li></Link>
        <Link to={'/laisla/PrivateLabel'}><li>PRIVATE LABEL SWIMWEAR</li></Link>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navbar