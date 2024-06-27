import './AboutUs.css'
import Section1About from '../../Components/AboutUs/Section1About/Section1About'
import Section2About from '../../Components/AboutUs/Section2About/Section2About'
import Section3About from '../../Components/AboutUs/Section3About/Section3About'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="We are a full service factory providing private label bathing suits, bikinis, and other types of swimwear. If you’re looking for ethically made white label swimwear, click here."/>
        <meta name="keywords" content="private label swimwear, private label bathing suits, swimwear, white label swimwear, bathing suits"/>
      </Helmet>
      <Section1About/>
      <Section2About/>
      <Section3About/>
    </div>
  )
}

export default AboutUs