import React from 'react'
import './Footer.css'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import laislaLogo from '../../assets/laislasvg.svg'
import circlearrow from '../../assets/criclearrow.svg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='contactsindustries'>
            <div className='contacts'>
                <img src={laislaLogo} alt=''/>
                <p className='contactText'>CONTACT US</p>
                <hr/>
                <div className='phoneEmail'>
                    <p>+1234556667777</p>
                    <div/>
                    <p>sales@laislabrand.com</p>
                </div>
            </div>
            <div className='industries'>
                <p className='industrytext'>SOME INDUSTRIES</p>
                <hr/>
                <div className='grid'>
                    <div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div/>
                    <div>
                    <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='socialmedia'>
            <img src={facebook} alt=''/>
            <div/>
            <img src={instagram} alt=''/>
        </div>
    </div>
  )
}

export default Footer