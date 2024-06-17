import './PrivateLabelSwimwear.css'
import Section1PrivateLabel from '../../Components/PagePrivateLabel/Section1PrivateLabel/Section1PrivateLabel'
import Section2PrivateLabel from '../../Components/PagePrivateLabel/Section2PrivateLabel/Section2PrivateLabel'
import Section3PrivateLabel from '../../Components/PagePrivateLabel/Section3PrivateLabel/Section3PrivateLabel'
import Section4PrivateLabel from '../../Components/PagePrivateLabel/Section4PrivateLabel/Section4PrivateLabel'
import { Helmet } from 'react-helmet'

const PrivateLabelSwimwear = () => {
  return (
    <div>
      <Helmet>
        <title>Trusted Private Label Swimwear Manufacturer Factory: Ethically Made </title>
        <meta name="description" content="We are a full service factory providing private label bathing suits, bikinis, and other types of swimwear. If you’re looking for ethically made white label swimwear, click here."/>
        <meta name="keywords" content="private label, swimwear, white, bathing suits"/>
      </Helmet>
      <Section1PrivateLabel/>
      <Section2PrivateLabel/>
      <Section3PrivateLabel/>
      <Section4PrivateLabel/>
    </div>
  )
}

export default PrivateLabelSwimwear