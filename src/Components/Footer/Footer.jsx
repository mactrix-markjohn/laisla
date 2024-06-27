import './Footer.css'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import laislaLogo from '../../assets/laislasvg.svg'
import circlearrow from '../../assets/criclearrow.svg'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='Footer'>
        <div className='contactsindustries'>

            <div className='contacts'>
                <img src={laislaLogo} alt=''/>
                <p className='contactText'>CONTACT US</p>
                <div className='contactshr'/>
                <div className='phoneEmail'>
                    <p onClick={() => {window.location.href = 'mailto:hello@laislabrand.com'}}>hello@laislabrand.com</p>
                    <div/>
                    <p></p>
                </div>
            </div>

            <div className='industries'>
                <p className='industrytext'>PRIVATE LABEL SWIMWEAR</p>
                <div className='industrieshr'/>
                <div className='grid'>
                    <div>
                        <Link to={`/journal/article/how-to-start-your-own-swimwear-company`}><div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>How to start your own swimwear company</p>
                        </div></Link>
                        <Link to={`/journal/article/white-label-swimwear-vs-private-label-swimwear`}><div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>White label swimwear vs. Private label swimwear</p>
                        </div></Link>
                        <Link to={`/journal/article/how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla`}><div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>How to find the best swimwear factory for your business: A guide by La Isla
                            </p>
                        </div></Link>
                        <Link to={`/journal/article/how-to-start-your-own-swimwear-company-2`}><div className='gridcontent'>
                            <img src={circlearrow} alt=''/>
                            <div/>
                            <p>How to start your own swimwear company</p>
                        </div></Link>
                        
                    </div>
                    
                    <div/>

                    {/* <div>
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
                    </div> */}
                </div>
            </div>

        </div>

        <div className='socialmedia'>
            <img onClick={() => window.open('https://www.facebook.com/laislabrand/', '_blank')} src={facebook} alt=''/>
            <div/>
            <img onClick={() => {window.open('https://www.instagram.com/laislabrand/', '_blank')}} src={instagram} alt=''/>
        </div>
    </div>
  )
}

export default Footer