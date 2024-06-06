import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import SectionTwo from '../../Components/Section2/SectionTwo'
import SectionThree from '../../Components/Section3/SectionThree'
import SectionFour from '../../Components/Section4/SectionFour'
import SectionFive from '../../Components/Section5/SectionFive'

const Home = () => {
  return (
    <div>
        <Hero/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default Home