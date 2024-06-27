import './ContactUs.css'
import Section1Contact from '../../Components/ContactUs/Section1Contact/Section1Contact'
import { Helmet } from 'react-helmet'

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us </title>
        <meta name="description" content="Send us a message. We respond as fast as possible."/>
        <meta name="keywords" content="private label swimwear, private label bathing suits, swimwear, white label swimwear, bathing suits"/>
      </Helmet>
        <Section1Contact/>
    </div>
  )
}

export default ContactUs