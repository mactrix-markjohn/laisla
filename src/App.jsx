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
        <Route path='/laisla/about-us' element={<AboutUs/>} />
        <Route path='/laisla/journal' element={<Journal/>} />
        <Route path='/laisla/contact-us' element={<ContactUs/>} />
        <Route path='/laisla/journal/SEO' element={<SEO/>} />
        <Route path='/laisla/journal/Interna' element={<Interna/>} />
        <Route path='/laisla/journal/article/:articleId' element={<Article/>} />
        
        {/*Redirect URLs*/}
        
        <Route path='/laisla/lookbook' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/lookbooks/womens-swimwear/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/private-label/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/private-label/factory/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/private-label/testimonials/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>
        <Route path='/laisla/lookbooks/mens-swimwear/' element={<Navigate to='/laisla/private-label-swimwear'/>}/>

        <Route path='/laisla/how-to-start-your-own-swimwear-company/' element={<Navigate to='/laisla/journal/article/how-to-start-your-own-swimwear-company'/>}/>
        <Route path='/laisla/white-label-swimwear-vs-private-label-swimwear/' element={<Navigate to='/laisla/journal/article/white-label-swimwear-vs-private-label-swimwear'/>}/>
        <Route path='/laisla/how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla/' element={<Navigate to='/laisla/journal/article/how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla'/>}/>
        <Route path='/laisla/how-to-start-your-own-swimwear-company-2/' element={<Navigate to='/laisla/journal/article/how-to-start-your-own-swimwear-company-2'/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App
