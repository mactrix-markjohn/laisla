import './Hero.css'
import modelwater from '../../assets/watermodel.png'
import modelwater1 from '../../assets/watermodel1.jpeg'
import modelwater2 from '../../assets/watermodel2.jpeg'
import modelwater3 from '../../assets/watermodel3.jpeg'
//import modelwater1min from '../../assets/watermodel1-min.jpeg'
//import modelwater2min from '../../assets/watermodel2-min.jpeg'
//import modelwater3min from '../../assets/watermodel3-min.jpeg'
import modelwatermobile from '../../assets/watermodelmobile.png'
import modelwater1mobile from '../../assets/watermodel1mobile.jpeg'
import modelwater2mobile from '../../assets/watermodel2mobile.jpeg'
import modelwater3mobile from '../../assets/watermodel3mobile.jpeg'
import line from '../../assets/lines.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { ProgressBar } from 'react-bootstrap'
import { useState} from 'react'
//import ProgressiveImage from 'react-progressive-image';
import ImageComponent from '../ImageComponent'

const Hero = () => {

  const [progress, setProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0)

  const hash1 = 'L69jr~,,0z$+T}wGwHNdNE$e=xJA'
  const hash2 = 'LMGSM|oiIoOs%%RORPofS#WWt9s:'
  const hash3 = 'L4AwVc~T00oe_3.8%MadD~o$^,t8'

  const hash1mobile = 'LE9HbCxYIoRjL4a{xZj[NaS4s:s:'
  const hash2mobile = 'LeH2sPV[S#Sh%%WBjZjsSej]s9o0'
  const hash3mobile = 'LDDm2JjrskM{~nR*%MM{s$Rja#Rj'

  
  

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
            {/* <img className='Swiperimg' src={modelwater1} alt="" loading="lazy" fetchPriority="high" /> */}
            {/* <ProgressiveImage className='Swiperimg' src={modelwater1} placeholder={modelwater1min}>
              {(src, loading) => (
                <img className='Swiperimg' style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
              )}
            </ProgressiveImage> */}
            <ImageComponent classnames='Swiperimg' src={modelwater1} hash={hash1} heights='calc(65vw * 9/16)' />
          </Carousel.Item>

          <Carousel.Item>
            {/* <img className='Swiperimg' src={modelwater2} alt="" loading="lazy" fetchPriority="high" /> */}
            {/* <ProgressiveImage className='Swiperimg' src={modelwater2} placeholder={modelwater2min}>
              {(src, loading) => (
                <img className='Swiperimg' style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
              )}
            </ProgressiveImage> */}
            <ImageComponent classnames='Swiperimg' src={modelwater2} hash={hash2} heights='calc(65vw * 9/16)'/>
          </Carousel.Item>

          <Carousel.Item>
           {/* <img className='Swiperimg' src={modelwater3} alt="" loading="lazy" fetchPriority="high" /> */}
           {/* <ProgressiveImage className='Swiperimg' src={modelwater3} placeholder={modelwater3min}>
              {(src, loading) => (
                <img className='Swiperimg' style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
              )}
            </ProgressiveImage> */}
            <ImageComponent classnames='Swiperimg' src={modelwater3} hash={hash3} heights='calc(65vw * 9/16)'/>
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
            {/* <img className='Swiperimg' src={modelwater1mobile} alt="" loading="lazy" fetchPriority="high" /> */}
            <ImageComponent classnames='Swiperimg' src={modelwater1mobile} hash={hash1mobile} heights='calc(210vw * 9/16)'/>          
          </Carousel.Item>

          <Carousel.Item>
            {/* <img className='Swiperimg' src={modelwater2mobile} alt="" loading="lazy" fetchPriority="high" /> */}
            <ImageComponent classnames='Swiperimg' src={modelwater2mobile} hash={hash2mobile} heights='calc(210vw * 9/16)'/>      
          </Carousel.Item>
          <Carousel.Item>
            {/* <img className='Swiperimg' src={modelwater3mobile} alt="" loading="lazy" fetchPriority="high" /> */}
            <ImageComponent classnames='Swiperimg' src={modelwater3mobile} hash={hash3mobile} heights='calc(210vw * 9/16)'/>  
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