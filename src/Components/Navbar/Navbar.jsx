import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container whitenav'>
        <img src={logo} alt='' className='logo' />
        <ul>
            <li>HOME</li>
            <li>PRIVATE LABEL SWIMWEAR</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navbar