import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SectionTwo from './Components/Section2/SectionTwo'
import SectionThree from './Components/Section3/SectionThree'
import SectionFour from './Components/Section4/SectionFour'
import SectionFive from './Components/Section5/SectionFive'
import Footer from './Components/Footer/Footer'


import Home from './pages/Home/Home'
import PrivateLabelSwimwear from './pages/PrivateLabelSwimwear/PrivateLabelSwimwear'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/laisla' element={<Home/>} />
        <Route path='/laisla/PrivateLabel' element={<PrivateLabelSwimwear/>} />
        <Route path='/laisla/AboutUs' element={<AboutUs/>} />
        <Route path='/laisla/ContactUs' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
