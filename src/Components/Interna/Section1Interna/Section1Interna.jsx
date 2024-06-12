import './Section1Interna.css'
import hero from '../../../assets/internatitle.png'
import heromobile from '../../../assets/internatitlemobile.png'

const Section1Interna = () => {
  return (
    <div className='Section1Interna'>
         <img className='Section1Internaimg' src={hero} alt=''/>
         <img className='Section1Internaimgmobile' src={heromobile} alt=''/>
    </div>
  )
}

export default Section1Interna