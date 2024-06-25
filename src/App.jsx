import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


import Home from './pages/Home/Home'
import PrivateLabelSwimwear from './pages/PrivateLabelSwimwear/PrivateLabelSwimwear'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Journal from './pages/Journal/Journal'
import SEO from './pages/SEO/SEO'
import Interna from './pages/Interna/Interna'
import { Helmet } from 'react-helmet'
import Article from './pages/Article/Article'


function App() {

  return (
    <div>
      <Helmet>
        <title>Designer Bathing Suits, Vintage T Shirts & Headwear | La Isla</title>
        <meta name="description" content="Ecologically Intelligent Swimwear A commitment to quality. From the inspiration of the design to the inception of the product, everything bearing the LA ISLA name is made with equal consciousness for the environment and for style."/>
        <meta name="keywords" content="La Isla, private label swimwear"/>
      </Helmet>
      <Navbar/>
      <Routes>
        <Route path='/laisla' element={<Home/>} />
        <Route path='/laisla/private-label-swimwear' element={<PrivateLabelSwimwear/>} />
        {/*<Route path='/laisla/PrivateLabel' element={<PrivateLabelSwimwear/>} />*/}
        <Route path='/laisla/AboutUs' element={<AboutUs/>} />
        <Route path='/laisla/Journal' element={<Journal/>} />
        <Route path='/laisla/ContactUs' element={<ContactUs/>} />
        <Route path='/laisla/Journal/SEO' element={<SEO/>} />
        <Route path='/laisla/Journal/Interna' element={<Interna/>} />
        <Route path='/laisla/Journal/Article/:articleId' element={<Article/>} />
        <Route path='/laisla/lookbook' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/lookbooks/womens-swimwear/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
