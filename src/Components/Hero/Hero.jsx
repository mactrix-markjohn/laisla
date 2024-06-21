import './Hero.css'
import modelwater from '../../assets/watermodel.png'
import modelwater1 from '../../assets/watermodel1.jpeg'
import modelwater2 from '../../assets/watermodel2.jpeg'
import modelwater3 from '../../assets/watermodel3.jpeg'
import modelwatermobile from '../../assets/watermodelmobile.png'
import line from '../../assets/lines.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/thumbs';

import 'swiper/css/free-mode';

// import required modules
import { Autoplay, Pagination, Navigation} from 'swiper/modules';




const Hero = () => {
  

  return (
    <div className='hero'>
      <div className='FullHero'>
        <img className='heroimg' src={modelwater} alt="" />
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            type: "progressbar",
            
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide><img className='Swiperimg' src={modelwater1} alt="" /></SwiperSlide>
          <SwiperSlide> <img className='Swiperimg' src={modelwater2} alt="" /></SwiperSlide>
          <SwiperSlide> <img className='Swiperimg' src={modelwater3} alt="" /></SwiperSlide>
        </Swiper>
      </div>
        
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