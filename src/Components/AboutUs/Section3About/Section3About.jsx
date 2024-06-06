import React from 'react'
import './Section3About.css'
import model from '../../../assets/aboutmodelblue3.png'

const Section3About = () => {
  return (
    <div className='Section3About'>
      <div className='Section3About1'>
            <div className='Section3AboutTextRegion'>
                <p>
                At La Isla, we maintain exclusive partnerships with reputable Colombian and European suppliers to procure premium-quality fabrics, threads, hardware, and trims. Our longstanding relationships with these suppliers afford us preferential treatment, resulting in streamlined processes and enhanced brand offerings for our clients. <br/><br/><b>We look forward to the opportunity to collaborate with you and address your full package swimwear private label manufacturing needs.</b>
                </p>
                <div className='Section3AboutContact'>
                  <button className='Section3AboutcontactBtn'>CONTACT US</button>
                </div>
            </div>
            <div className='Section3AboutImageRegion'>
                <img src={model} alt=''/>
            </div>

        </div>
    </div>
  )
}

export default Section3About