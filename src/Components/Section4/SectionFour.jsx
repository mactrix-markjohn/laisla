import React from 'react'
import './SectionFour.css'
import model from '../../assets/thirdmodelwhite.png'

const SectionFour = () => {
  return (
    <div className='SectionFour'>
        <div className='fourImageRegion'>
            <img src={model} alt=''/>
        </div>
        <div className='fourTextRegion'>
            <h2>Quality</h2>
            <hr/>
            <h1>We all know that in the pursuit of perfection, quality reigns supreme!</h1>
            <p>
            We prioritize craftsmanship and attention to detail in every garment we produce, ensuring that each piece meets the highest standards of excellence. Our unwavering commitment to quality extends to our sourcing practices, where we partner with some of the best suppliers in the world, like Carvico, to utilize sustainable, recycled fabrics that not only elevate your designs but also contribute to a more eco-conscious future.
            </p>
        </div>
        

    </div>
  )
}

export default SectionFour