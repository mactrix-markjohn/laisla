import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


import Home from './pages/Home/Home'
import PrivateLabelSwimwear from './pages/PrivateLabelSwimwear/PrivateLabelSwimwear'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Journal from './pages/Journal/Journal'
// import SEO from './pages/SEO/SEO'
// import Interna from './pages/Interna/Interna'
import Article from './pages/Article/Article'


function App() {

  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/private-label-swimwear' element={<PrivateLabelSwimwear/>} />
        {/*<Route path='/PrivateLabel' element={<PrivateLabelSwimwear/>} />*/}
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/journal' element={<Journal/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        {/* <Route path='/journal/SEO' element={<SEO/>} />
        <Route path='/journal/Interna' element={<Interna/>} /> */}
        <Route path='/journal/article/:articleId' element={<Article/>} />
        
        {/*Redirect URLs*/}
        
        <Route path='/lookbooks' element={<Navigate to='/private-label-swimwear'/>}/>
        <Route path='/lookbooks/womens-swimwear/' element={<Navigate to='/private-label-swimwear'/>}/>
        <Route path='/private-label/' element={<Navigate to='/private-label-swimwear'/>}/>
        <Route path='/private-label/factory/' element={<Navigate to='/private-label-swimwear'/>}/>
        <Route path='/private-label/testimonials/' element={<Navigate to='/private-label-swimwear'/>}/>
        <Route path='/lookbooks/mens-swimwear/' element={<Navigate to='/private-label-swimwear'/>}/>

        <Route path='/how-to-start-your-own-swimwear-company/' element={<Navigate to='/journal/article/how-to-start-your-own-swimwear-company'/>}/>
        <Route path='/white-label-swimwear-vs-private-label-swimwear/' element={<Navigate to='/journal/article/white-label-swimwear-vs-private-label-swimwear'/>}/>
        <Route path='/how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla/' element={<Navigate to='/journal/article/how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla'/>}/>
        <Route path='/how-to-start-your-own-swimwear-company-2/' element={<Navigate to='/journal/article/how-to-start-your-own-swimwear-company-2'/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App
