import './SectionTestimonialPrivate.css'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import quote from '../../../assets/quote.svg'
import quoterev from '../../../assets/quoterev.svg'

const SectionTestimonialPrivate = () => {
  return (
    <div className='SectionTestimonialPrivate'>

        <button className='SectionTestimonialPrivateBtnPrev'><img src={prev} alt=''/></button>
        <div className='SectionTestimonialPrivateTextRegion'>
            <img className='SectionTestimonialPrivateQuoteLeft' src={quote}/>
            <div className='SectionTestimonialPrivateTextContent'>
                <h2>Testimonials</h2>
                <p className='SectionTestimonialPrivateNormText'>I had the pleasure of working with La Isla brand while in my role as Director of Retail for Strategic Hotels & Resorts. The swimwear line filled a gap in our resort swimwear mix, particularly for the Five Star Four Seasons Punta Mita Mexico resort and the Loews Santa Monica, California property. Enrique and his team were instant partners in planning assortments, assuring timeliness of delivery and overall collaboration on seasonal basis. The high quality of the product stood out in the mix, leading to dynamic sales and growth and loyalty to the brand by the exacting clientele.</p>
                <h3>DEBORAH BUSH</h3>
                <hr/>
                <p className='SectionTestimonialPrivateBrownText'>FORMER DIRECTOR OF RETAIL
                STRATEGIC HOTELS</p>
            </div>
            <img className='SectionTestimonialPrivateQuoteRight' src={quoterev}/>
        </div>
        <button className='SectionTestimonialPrivateBtnNext'><img src={next} alt=''/></button>
    </div>
  )
}

export default SectionTestimonialPrivate