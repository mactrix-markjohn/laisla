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
import Press from './pages/Press/Press'
import PressPage from './pages/PressPage/PressPage'


function App() {

  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/private-label-swimwear' element={<PrivateLabelSwimwear/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/journal' element={<Journal/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/journal/article/:articleId' element={<Article/>} />
        <Route path='/press' element={<Press/>} />
        <Route path='/press/:pressId' element={<PressPage/>}/>
        {/*<Route path='/PrivateLabel' element={<PrivateLabelSwimwear/>} />*/}
        {/* <Route path='/journal/SEO' element={<SEO/>} />
        <Route path='/journal/Interna' element={<Interna/>} /> */}
        
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

        <Route path='/particle-fever-star-monica-dunford-grants-la-isla-an-exclusive-interview/' element={<Navigate to='/'/>}/>
        <Route path='/lhc_hall_1/' element={<Navigate to='/'/>}/>
        <Route path='/atlas_1/' element={<Navigate to='/'/>}/>
        <Route path='/water-architecture-a-chat-with-waterstudio-and-koen-olthuis/' element={<Navigate to='/'/>}/>
        <Route path='/exclusive-cedella-marley-interview-for-la-isla/' element={<Navigate to='/'/>}/>
        <Route path='/the-local-froth-our-favorite-slo-coffee-shops/' element={<Navigate to='/'/>}/>
        <Route path='/the-white-buffalo-interview/' element={<Navigate to='/'/>}/>
        <Route path='/the-white-buffalo-interview/wbja/' element={<Navigate to='/'/>}/>
        <Route path='/exclusive-g-love-interview-for-la-isla/' element={<Navigate to='/'/>}/>
        <Route path='/collapsing-seas/' element={<Navigate to='/'/>}/>
        <Route path='/putting-together-your-essential-yoga-wardrobe/' element={<Navigate to='/'/>}/>
        <Route path='/interview-with-salvatore-ferragamo-il-borro/' element={<Navigate to='/'/>}/>
        <Route path='/shop/la-isla-tribe-only-bikini/' element={<Navigate to='/'/>}/>
        <Route path='/interview-with-jean-michel-cousteau/' element={<Navigate to='/'/>}/>
        <Route path='/inteview-with-tyler-ramsey/' element={<Navigate to='/'/>}/>
       


      </Routes>
      <Footer/>
    </div>
  )
}

export default App
