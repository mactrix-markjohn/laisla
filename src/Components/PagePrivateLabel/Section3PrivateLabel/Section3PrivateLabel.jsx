import React from 'react'
import './Section3PrivateLabel.css'
import check from '../../../assets/Check.svg'

const Section3PrivateLabel = () => {
  return (
    <div className='Section3PrivateLabel'>
        <h2>Product Design and Development</h2>
        <hr/>
        <div className='Section3Grid'>
            <div>

                <div className='Section3PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p>Design and development capacity</p>
                </div>
                <div className='Section3PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p>Pattern and specification development</p>
                </div>

            </div>

            <div/>

            <div>

                <div className='Section3PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p>Lectra system computer (Gerber compatible)</p>
                </div>
                <div className='Section3PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p>Prototyping and fit test garments.</p>
                </div>

            </div>
            
            
        </div>

    </div>
  )
}

export default Section3PrivateLabel