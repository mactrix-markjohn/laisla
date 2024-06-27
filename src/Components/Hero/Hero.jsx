import './Hero.css'
import modelwater from '../../assets/watermodel.png'
import modelwater1 from '../../assets/watermodel1.jpeg'
import modelwater2 from '../../assets/watermodel2.jpeg'
import modelwater3 from '../../assets/watermodel3.jpeg'
import modelwatermobile from '../../assets/watermodelmobile.png'
import modelwater1mobile from '../../assets/watermodel1mobile.jpeg'
import modelwater2mobile from '../../assets/watermodel2mobile.jpeg'
import modelwater3mobile from '../../assets/watermodel3mobile.jpeg'
import line from '../../assets/lines.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { ProgressBar } from 'react-bootstrap'
import { useState} from 'react'


const Hero = () => {

  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0)

 

  
  

  return (
    <div className='hero'>
      <div className='FullHero'>
        <img className='heroimg' src={modelwater} alt="" />
        <Carousel 
          className='HeroCarousel'
          interval={3000} // Set the autoplay interval
          onSelect={(index) => {
            setSlideIndex(index+1)
            setProgress(() => {
              return (index + 1) / 3 * 100;
            });
          }}
          indicators={false}
        >
          <Carousel.Item>
            <img className='Swiperimg' src={modelwater1} alt="" loading="eager" />          
          </Carousel.Item>

          <Carousel.Item>
            <img className='Swiperimg' src={modelwater2} alt="" loading="eager" />      
          </Carousel.Item>
          <Carousel.Item>
            <img className='Swiperimg' src={modelwater3} alt="" loading="eager" />  
          </Carousel.Item>

        </Carousel>


      </div>

      <div className='FullHeroMobile'>
        <img className='heroimgmobile' src={modelwatermobile} alt="" />
        <Carousel 
          className='HeroCarouselMobile'
          interval={3000} // Set the autoplay interval
          onSelect={(index) => {
            setSlideIndex(index+1)
            setProgress(() => {
              return (index + 1) / 3 * 100;
            });
          }}
          indicators={false}
        >
          <Carousel.Item>
            <img className='Swiperimg' src={modelwater1mobile} alt="" loading="eager" />          
          </Carousel.Item>

          <Carousel.Item>
            <img className='Swiperimg' src={modelwater2mobile} alt="" loading="eager" />      
          </Carousel.Item>
          <Carousel.Item>
            <img className='Swiperimg' src={modelwater3mobile} alt="" loading="eager" />  
          </Carousel.Item>

        </Carousel>

      </div>
        
        
        <div className="content">
            <h1>Excellence in Swimwear Manufacturing with La Isla</h1>
            <p>Welcome to La Isla, one of the world’s premier destinations for high-end swimwear manufacturing.</p>
        </div>
        <div className='loading'>
          <ProgressBar 
            className='ProgressBar' 
            variant="white" 
            now={progress} 
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)', // Set the background color
              height: '7px', // Set the height
              color: 'rgba(255, 255, 255, 0.7)', // Set the fill color, 
            }}
          />
          <img src={line} alt=''/>
          <p>0{slideIndex}|03</p>
        </div>


    </div>
  )
}

export default Hero