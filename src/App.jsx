import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


import Home from './pages/Home/Home'
import PrivateLabelSwimwear from './pages/PrivateLabelSwimwear/PrivateLabelSwimwear'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Journal from './pages/Journal/Journal'
import SEO from './pages/SEO/SEO'
import Interna from './pages/Interna/Interna'


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/laisla' element={<Home/>} />
        <Route path='/laisla/PrivateLabel' element={<PrivateLabelSwimwear/>} />
        <Route path='/laisla/AboutUs' element={<AboutUs/>} />
        <Route path='/laisla/Journal' element={<Journal/>} />
        <Route path='/laisla/ContactUs' element={<ContactUs/>} />
        <Route path='/laisla/Journal/SEO' element={<SEO/>} />
        <Route path='/laisla/Journal/Interna' element={<Interna/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
