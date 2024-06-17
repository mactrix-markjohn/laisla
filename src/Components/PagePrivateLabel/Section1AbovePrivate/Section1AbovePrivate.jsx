import './Section1AbovePrivate.css'
import hero from '../../../assets/seohero.png'
import heromobile from '../../../assets/seoheromobile.png'
import { Link } from 'react-router-dom'

const Section1AbovePrivate = () => {
  return (
    <div className='Section1AbovePrivate'>
        <img className='Section1AbovePrivateimg' src={hero} alt=''/>
        <img className='Section1AbovePrivateimgmobile' src={heromobile} alt=''/>
        <div className='Section1AbovePrivateContent'>
            <h1>Private Label Swimwear | Create a Stunning Bathing Suit Line</h1>
            <Link to={'/laisla/Journal/Interna'}><button className='Section1AbovePrivateButton'>LEARN MORE</button></Link>
        </div>
    </div>
  )
}

export default Section1AbovePrivate