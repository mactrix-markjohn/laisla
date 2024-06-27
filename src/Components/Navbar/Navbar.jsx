import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import navmenu from '../../assets/NavMenu.svg'
import { useState } from 'react'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const location = useLocation();

  const [menu,setMenu] = useState(location.pathname);

  

  




  return (
    <nav className='mycontainer whitenav'>
        <Link to={'/'}><img src={logo} alt='' className='logo' onClick={()=>setMenu("/")} /></Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <Link to={'/'}><li className={menu==="/" ? 'active' : ''} onClick={()=>setMenu("/")} >HOME</li></Link>
            <Link to={'/private-label-swimwear'}><li className={menu==="/private-label-swimwear" ? 'active' : ''} onClick={()=>setMenu("/private-label-swimwear")}>PRIVATE LABEL SWIMWEAR</li></Link>
            <Link to={'/about-us'}><li className={menu==="/about-us" ? 'active' : ''} onClick={()=>setMenu("/about-us")}>ABOUT US</li></Link>
            <Link to={'/journal'}><li className={menu==="/journal" ? 'active' : ''} onClick={()=>setMenu("/journal")}>JOURNAL</li></Link>
            <Link to={'/contact-us'}><li className={menu==="/contact-us" ? 'active' : ''} onClick={()=>setMenu("/contact-us")}>CONTACT US</li></Link>
        </ul>
        <img src={navmenu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>

    /*<nav className='container whitenav'>
        <Link to={'/laisla'}><img src={logo} alt='' className='logo' /></Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <Link to={'/laisla'}><li className={menu==="home" ? 'active' : ''} onClick={()=>setMenu("home")} >HOME</li></Link>
            <Link to={'/private-label-swimwear'}><li className={menu==="privatelabel" ? 'active' : ''} onClick={()=>setMenu("privatelabel")}>PRIVATE LABEL SWIMWEAR</li></Link>
            <Link to={'/about-us'}><li className={menu==="about-us" ? 'active' : ''} onClick={()=>setMenu("about-us")}>ABOUT US</li></Link>
            <Link to={'/Journal'}><li className={menu==="journal" ? 'active' : ''} onClick={()=>setMenu("journal")}>JOURNAL</li></Link>
            <Link to={'/contact-us'}><li className={menu==="contact-us" ? 'active' : ''} onClick={()=>setMenu("contact-us")}>CONTACT US</li></Link>
        </ul>
        <img src={navmenu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>*/
    
  )
}

export default Navbar