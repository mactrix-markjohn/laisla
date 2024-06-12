import './Hero.css'
import modelwater from '../../assets/watermodel.png'
import modelwatermobile from '../../assets/watermodelmobile.png'
import line from '../../assets/lines.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='heroimg' src={modelwater} alt="" />
        <img className='heroimgmobile' src={modelwatermobile} alt="" />
        <div className="content">
            <h1>Excellence in Swimwear Manufacturing with La Isla</h1>
            <p>Welcome to La Isla, one of the world’s premier destinations for high-end swimwear manufacturing.</p>
        </div>
        <div className='loading'>
          <img src={line} alt=''/>
          <p>01|03</p>
        </div>


    </div>
  )
}

export default Hero