import React from 'react'
import './SectionFive.css'
import blackline from '../../assets/blackline.svg'
import modelblue from '../../assets/fourthmodelblue.png'
import modelorange from '../../assets/fourthmodelorange.png'
import modelpink from '../../assets/fourthmodelpink.png'


const SectionFive = () => {
  return (
    <div className='SectionFive'>
        <div className='fiveTitle'>
            <h2>Sustainability</h2>
            <img src={blackline} alt=''/>
            <h1>At La Isla, sustainability isn't just a buzzword – it's a way of life.</h1>
        </div>
        <div className='fiveimages'>
          <img src={modelorange} alt=''/>
          <img className='fiveCenterImage' src={modelblue} alt=''/>
          <img src={modelpink} alt=''/>
        </div>
        <div className='fiveText'>
          <p>Since our founding, we're proud to operate with a focus on environmental responsibility, utilizing eco-friendly production methods and embracing initiatives that reduce our carbon footprint. From our solar-powered web and email servers, to our dedication to utilizing recycled materials, we're committed to making a positive impact on both the industry and the planet.</p>
          <br/>
          <p className='fiveboldtext'>Reach out to us so we can help you embark on a journey of creativity, innovation, and sustainability!</p>
        </div>
        <div className='fiveContact'>
          <button className='contactBtn'>CONTACT US</button>
        </div>
    </div>
  )
}

export default SectionFive