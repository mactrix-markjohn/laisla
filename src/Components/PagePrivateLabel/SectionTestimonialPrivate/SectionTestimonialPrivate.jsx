import './SectionTestimonialPrivate.css'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import quote from '../../../assets/quote.svg'
import quoterev from '../../../assets/quoterev.svg'
import { useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const SectionTestimonialPrivate = () => {

  const testimonials = [
    {
        id: 1,
        name: "DEBORAH BUSH",
        company: "FORMER DIRECTOR OF RETAIL STRATEGIC HOTELS",
        quote: "I had the pleasure of working with La Isla brand while in my role as Director of Retail for Strategic Hotels & Resorts. The swimwear line filled a gap in our resort swimwear mix, particularly for the Five Star Four Seasons Punta Mita Mexico resort and the Loews Santa Monica, California property. Enrique and his team were instant partners in planning assortments, assuring timeliness of delivery and overall collaboration on seasonal basis. The high quality of the product stood out in the mix, leading to dynamic sales and growth and loyalty to the brand by the exacting clientele."
    },
    {
      id: 2,
      name: "JULIA COVINTREE",
      company: "PRODUCTION MANAGER - CYNTHIA ROWLEY",
      quote: "Since the introduction to LA ISLA and it’s CEO, Enrique Sanchez-Rivera, working from development to production has been a great and positive experience. We have recently finished production of our swim collection with LA ISLA private label and we are 100% satisfied with the end product. We have worked with other manufacturers in the past and no other manufacturer compares. Their high standards and tight quality control is what will push your product to the next level. Their attention to detail and ability to customize is a great aspect for working with LA ISLA for complete packages. Communicating with Enrique has always been great as well as he is always accessible and responds in a timely manner. Thank you LA ISLA and Enrique!"
    },
    {
      id: 3,
      name: "JEAN-MICHEL COUSTEAU",
      company: "FOUNDER, OCEAN FUTURES SOCIETY - WWW.OCEANFUTURES.ORG",
      quote: "In today’s marketplace, no business can ignore its environmental footprint because customers now want to know what businesses are doing to minimize waste, minimize use of resources, and create products that are not harmful to the environment. We are beginning to experience a wave of sustainable prosperity. I appreciate LA ISLA for using the inspiration from the ocean to create swimwear and clothing that is in the spirit of enticing people to be outdoors, to be close to water; to feel, breathe the natural world. We must connect the ocean to the existence of every human being. This is the only way for people to understand that the quality of each and every one of our lives depends on water, depends on the ocean."
    }
];




  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -100){
      tx -= 50;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 50;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  }



  return (
    <div className='SectionTestimonialPrivate'>

        <button className='SectionTestimonialPrivateBtnPrev' onClick={slideBackward}><img src={prev} alt=''/></button>
        <div className='SectionTestimonialPrivateTextRegion'>
            <img className='SectionTestimonialPrivateQuoteLeft' src={quote}/>
            <div className='SectionTestimonialPrivateTextContent'>
                <h2>Testimonials</h2>

                <Splide options={{ 
                  perPage: 1,
                  width : 800,
                  gap   : '1rem',
                  arrows : false,
                  pagination: false,
                  }}>
                    {testimonials.map((testimonial) => (
                        <SplideSlide key={testimonial.id} className="testimonial" >
                          <p className='SectionTestimonialPrivateNormText'>{testimonial.quote}</p>
                          <h3>{testimonial.name}</h3>
                          <hr/>
                          <p className='SectionTestimonialPrivateBrownText'>{testimonial.company}</p>
                        </SplideSlide>
                    ))}
                </Splide>
                {/* <div className='SectionTestimonialPrivateslider'>
                  <ul ref={slider}>

                    <li>
                      <div className='SectionTestimonialPrivateslide'>
                        <p className='SectionTestimonialPrivateNormText'>I had the pleasure of working with La Isla brand while in my role as Director of Retail for Strategic Hotels & Resorts. The swimwear line filled a gap in our resort swimwear mix, particularly for the Five Star Four Seasons Punta Mita Mexico resort and the Loews Santa Monica, California property. Enrique and his team were instant partners in planning assortments, assuring timeliness of delivery and overall collaboration on seasonal basis. The high quality of the product stood out in the mix, leading to dynamic sales and growth and loyalty to the brand by the exacting clientele.</p>
                        <h3>DEBORAH BUSH</h3>
                        <hr/>
                        <p className='SectionTestimonialPrivateBrownText'>FORMER DIRECTOR OF RETAIL
                        STRATEGIC HOTELS</p>
                      </div>
                    </li>

                    <li>
                      <div className='SectionTestimonialPrivateslide'>
                        <p className='SectionTestimonialPrivateNormText'>Since the introduction to LA ISLA and it’s CEO, Enrique Sanchez-Rivera, working from development to production has been a great and positive experience. We have recently finished production of our swim collection with LA ISLA private label and we are 100% satisfied with the end product. We have worked with other manufacturers in the past and no other manufacturer compares. Their high standards and tight quality control is what will push your product to the next level. Their attention to detail and ability to customize is a great aspect for working with LA ISLA for complete packages. Communicating with Enrique has always been great as well as he is always accessible and responds in a timely manner. Thank you LA ISLA and Enrique!</p>
                        <h3>JULIA COVINTREE</h3>
                        <hr/>
                        <p className='SectionTestimonialPrivateBrownText'>PRODUCTION MANAGER CYNTHIA ROWLEY</p>
                      </div>
                    </li>

                    


                  </ul>
                </div>*/}
               
                
            </div>
            <img className='SectionTestimonialPrivateQuoteRight' src={quoterev}/>
        </div>
        <button className='SectionTestimonialPrivateBtnNext'onClick={slideForward}><img src={next} alt='' /></button>
    </div>
  )
}

export default SectionTestimonialPrivate