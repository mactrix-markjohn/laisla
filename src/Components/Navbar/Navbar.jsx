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
            <Link to={'/laisla/AboutUs'}><li>ABOUT US</li></Link>
            <Link to={'/laisla/Journal'}><li>JOURNAL</li></Link>
            <Link to={'/laisla/ContactUs'}><li>CONTACT US</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar