import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


import Home from './pages/Home/Home'
import PrivateLabelSwimwear from './pages/PrivateLabelSwimwear/PrivateLabelSwimwear'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Journal from './pages/Journal/Journal'


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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
