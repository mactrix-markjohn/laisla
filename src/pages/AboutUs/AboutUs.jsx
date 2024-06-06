import React from 'react'
import './AboutUs.css'
import Section1About from '../../Components/AboutUs/Section1About/Section1About'
import Section2About from '../../Components/AboutUs/Section2About/Section2About'
import Section3About from '../../Components/AboutUs/Section3About/Section3About'

const AboutUs = () => {
  return (
    <div>
      <Section1About/>
      <Section2About/>
      <Section3About/>
    </div>
  )
}

export default AboutUs