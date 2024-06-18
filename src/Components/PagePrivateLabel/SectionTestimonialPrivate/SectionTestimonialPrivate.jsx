import './SectionTestimonialPrivate.css'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import quote from '../../../assets/quote.svg'
import quoterev from '../../../assets/quoterev.svg'
import { useRef } from 'react'
//import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/splide/dist/css/splide.min.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

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
    },
    {
      id: 4,
      name: "SCOTT BARCLAY",
      company: "DIRECTOR OF PRODUCTION/SOURCING - THE POP STUDIO - LOS ANGELES, CA",
      quote: "I have known Enrique Sanchez-Rivera and LA ISLA for over 8 years. In that time period I have had the opportunity to work with him and his company in a myriad of projects. I have always been thoroughly impressed by the quality of their work, their on-time delivery, their professionalism, client service and honesty. I highly recommend Enrique and LA ISLA to anyone looking for high quality apparel production needs."
    },
    {
      id: 5,
      name: "ELAY DIE-GIRBAU",
      company: "ELA SWIMWEAR",
      quote: "As a designer I am a perfectionist. Having said that, the amazing staff at LA ISLA, in particular Enrique Sanchez-Rivera have not only met my high expectations, but have exceeded them. The manufacturing has been impeccable, as has been the company’s treatment towards me. They have been there every step of the way, answering every question, helping in every aspect and generally providing a great sense of support as manufacturing partners. The result has been a beautiful production of swimsuits that I could not be happier with! I have come to consider LA ISLA as an essential part of my brand and cannot wait to pursue my next collection with them."
    },
    {
      id: 6,
      name: "STEVIE & VICTORIA DECHIARO",
      company: "CHIARA LEAH SWIMWEAR",
      quote: "There are truly no words to describe seeing our first swimwear line come to life and seeing how beautiful everything turned out was like magic. All thanks to LA ISLA, who took our vision & made it better! It can be extremely challenging to find someone who can do everything and anything you wish, but LA ISLA has done just that & more. We were amazed at the quality and detail that was put into every aspect of our designs. LA ISLA has made this process a fairytale journey. We were confident and comfortable working with a brand that knew what we wanted and how to deliver. LA ISLA is our fairy-bikini-godmother!"
    },
    {
      id: 7,
      name: "BROCK STRASBOURGER",
      company: "HEAD OF BUSINESS - FANCY.COM",
      quote: "I have had the pleasure of working with LA ISLA and their CEO, Enrique Sanchez-Rivera, for nearly two years, and each conversation is as much of a delight as the last. Their products, aesthetic and style is amazing and something that we consistently look forward to featuring. With each season we eagerly await their next line and are never disappointed. Enrique and his team are extremely professional, kind and handle all of their dealings with the utmost integrity. Thank you for making my job easier."
    },
    {
      id: 8,
      name: "SHANNON CAMPBELL",
      company: "FASHION AND SWIMWEAR STYLIST - WWW.SHANNONCAMPBELLSTYLIST.COM",
      quote: "I have had the opportunity to work with La Isla and Enrique Sánchez-Rivera on many occasions. As a stylist, I have worked with hundreds of clients through out the years in TV and fashion. I can truly say that LA ISLA stands out not only because of their professionalism but also because of their attention to detail and the importance they always give to my work. The trust they give me and my vision and their ability to communicate and to always be available during a project is outstanding! LA ISLA and Enrique Sánchez-Rivera have always been first class all the way!"
    },
    {
      id: 9,
      name: "GREG AMMON",
      company: "CEO - BIG FLOWER - WWW.BIGFLOWER.COM",
      quote: "Working with LA ISLA has been an absolute pleasure. Our first order with them was a rush order for one of our events and we were very pleased to see it delivered three weeks early. Everything from sample development, to print development and production was outstanding. We look forward to working with LA ISLA for many years to come."
    },
    {
      id: 10,
      name: "THE EQUILIBRIUM VITAE TEAM",
      company: "WWW.EQUILIBRIUM-VITAE.COM",
      quote: "We feel very grateful that we had the opportunity to work with LA ISLA, especially with Enrique Sánchez-Rivera, its CEO. The experience has been extremely good and we are so happy to see our yoga wear collection finalized with such great quality and detailed work. LA ISLA has many qualities and one of them is that they are always there for their customers to answer any question and support them through out their journey. We are more than happy to work with them and LA ISLA has become an essential part of Equilibrium Vitae."
    },
    {
      id: 11,
      name: "GABRIELA FIGUEROA",
      company: "CEO - ANALÁ SWIMWEAR",
      quote: "It has been a pleasure working with LA ISLA and it’s CEO, Enrique Sánchez-Rivera. I met LA ISLA while looking for manufacturers for our swimwear line, Analá Swimwear. Enrique always has been incredibly attentive to every question we have had during the manufacturing process. His trustworthiness has always been present and we recognized it early on in the relationship. LA ISLA’s service and quality has been outstanding. They have always been there for us and his production timing schedule was on point. We also were very thankful to be assisted by LA ISLA’s design team. I would give LA ISLA a 10 out of 10. We cannot wait to pursue our next production with them."
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
            {/* {<img className='SectionTestimonialPrivateQuoteLeft' src={quote}/>} */}
            <div className='SectionTestimonialPrivateTextContent'>
                <h2>Testimonials</h2>
                <Swiper 
                 navigation={true} 
                 modules={[Navigation]}
                 className="mySwiper"
                 style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-navigation-size": "24px",
                }}
                 >
                
                {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="testimonial" >
                          <div className='SectionTestimonialPrivateslider'>

                            <img className='SectionTestimonialPrivateQuoteLeft' src={quote}/>

                            <div className='SectionTestimonialPrivateslide'>
                              <p className='SectionTestimonialPrivateNormText'>{testimonial.quote}</p>
                              <h3>{testimonial.name}</h3>
                              <hr/>
                              <p className='SectionTestimonialPrivateBrownText'>{testimonial.company}</p>
                            </div>

                            <img className='SectionTestimonialPrivateQuoteRight' src={quoterev}/>
                          
                          </div>
                          
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*<Splide options={{ 
                  perPage: 1,
                  width : 400,
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
                </Splide>*/}
                
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
            {/* {<img className='SectionTestimonialPrivateQuoteRight' src={quoterev}/>} */}
        </div>
        <button className='SectionTestimonialPrivateBtnNext'onClick={slideForward}><img src={next} alt='' /></button>
    </div>
  )
}

export default SectionTestimonialPrivate