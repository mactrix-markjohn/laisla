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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  )
}

export default App
