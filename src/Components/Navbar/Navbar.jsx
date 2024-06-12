import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import navmenu from '../../assets/NavMenu.svg'
import { useState } from 'react'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className='container whitenav'>
        <Link to={'/laisla'}><img src={logo} alt='' className='logo' /></Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <Link to={'/laisla'}><li>HOME</li></Link>
            <Link to={'/laisla/PrivateLabel'}><li>PRIVATE LABEL SWIMWEAR</li></Link>
            <Link to={'/laisla/AboutUs'}><li>ABOUT US</li></Link>
            <Link to={'/laisla/Journal'}><li>JOURNAL</li></Link>
            <Link to={'/laisla/ContactUs'}><li>CONTACT US</li></Link>
        </ul>
        <img src={navmenu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar