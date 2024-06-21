import './PrivateLabelSwimwear.css'
import Section1PrivateLabel from '../../Components/PagePrivateLabel/Section1PrivateLabel/Section1PrivateLabel'
//import Section2PrivateLabel from '../../Components/PagePrivateLabel/Section2PrivateLabel/Section2PrivateLabel'
//import Section3PrivateLabel from '../../Components/PagePrivateLabel/Section3PrivateLabel/Section3PrivateLabel'
//import Section4PrivateLabel from '../../Components/PagePrivateLabel/Section4PrivateLabel/Section4PrivateLabel'
import SectionTestimonialPrivate from '../../Components/PagePrivateLabel/SectionTestimonialPrivate/SectionTestimonialPrivate'
import { Helmet } from 'react-helmet'
import Section1AbovePrivate from '../../Components/PagePrivateLabel/Section1AbovePrivate/Section1AbovePrivate'
import Section4OptionPrivate from '../../Components/PagePrivateLabel/Section4OptionPrivate/Section4OptionPrivate'
import Section6DetailedPrivate from '../../Components/PagePrivateLabel/Section6DetailedPrivate/Section6DetailedPrivate'
import Section7FAQPrivateLabel from '../../Components/PagePrivateLabel/Section7FAQPrivate/Section7FAQPrivate'

const PrivateLabelSwimwear = () => {
  return (
    <div>
      <Helmet>
        <title>Trusted Private Label Swimwear Manufacturer Factory: Ethically Made </title>
        <meta name="description" content="We are a full service factory providing private label bathing suits, bikinis, and other types of swimwear. If you’re looking for ethically made white label swimwear, click here."/>
        <meta name="keywords" content="private label swimwear, private label bathing suits, swimwear, white label swimwear, bathing suits"/>
      </Helmet>
      <Section1AbovePrivate/>
      <SectionTestimonialPrivate/>
      <Section4OptionPrivate/>
      <Section1PrivateLabel/>
      <Section6DetailedPrivate/>
      <Section7FAQPrivateLabel/>
      {/*<Section2PrivateLabel/>
      <Section3PrivateLabel/>
      <Section4PrivateLabel/>*/}
    </div>
  )
}

export default PrivateLabelSwimwear