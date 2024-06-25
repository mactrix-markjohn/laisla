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
        <Link to={'/laisla/'}><img src={logo} alt='' className='logo' /></Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <Link to={'/laisla/'}><li className={menu==="/laisla/" ? 'active' : ''} onClick={()=>setMenu("/laisla/")} >HOME</li></Link>
            <Link to={'/laisla/private-label-swimwear'}><li className={menu==="/laisla/private-label-swimwear" ? 'active' : ''} onClick={()=>setMenu("/laisla/private-label-swimwear")}>PRIVATE LABEL SWIMWEAR</li></Link>
            <Link to={'/laisla/about-us'}><li className={menu==="/laisla/about-us" ? 'active' : ''} onClick={()=>setMenu("/laisla/about-us")}>ABOUT US</li></Link>
            <Link to={'/laisla/journal'}><li className={menu==="/laisla/journal" ? 'active' : ''} onClick={()=>setMenu("/laisla/journal")}>JOURNAL</li></Link>
            <Link to={'/laisla/contact-us'}><li className={menu==="/laisla/contact-us" ? 'active' : ''} onClick={()=>setMenu("/laisla/contact-us")}>CONTACT US</li></Link>
        </ul>
        <img src={navmenu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>

    /*<nav className='container whitenav'>
        <Link to={'/laisla'}><img src={logo} alt='' className='logo' /></Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <Link to={'/laisla'}><li className={menu==="home" ? 'active' : ''} onClick={()=>setMenu("home")} >HOME</li></Link>
            <Link to={'/laisla/private-label-swimwear'}><li className={menu==="privatelabel" ? 'active' : ''} onClick={()=>setMenu("privatelabel")}>PRIVATE LABEL SWIMWEAR</li></Link>
            <Link to={'/laisla/about-us'}><li className={menu==="about-us" ? 'active' : ''} onClick={()=>setMenu("about-us")}>ABOUT US</li></Link>
            <Link to={'/laisla/Journal'}><li className={menu==="journal" ? 'active' : ''} onClick={()=>setMenu("journal")}>JOURNAL</li></Link>
            <Link to={'/laisla/contact-us'}><li className={menu==="contact-us" ? 'active' : ''} onClick={()=>setMenu("contact-us")}>CONTACT US</li></Link>
        </ul>
        <img src={navmenu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>*/
    
  )
}

export default Navbar