import './Home.css'
import Hero from '../../Components/Hero/Hero'
import SectionTwo from '../../Components/Section2/SectionTwo'
import SectionThree from '../../Components/Section3/SectionThree'
import SectionFour from '../../Components/Section4/SectionFour'
import SectionFive from '../../Components/Section5/SectionFive'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
        <Helmet>
          <title>Designer Bathing Suits, Vintage T Shirts & Headwear | La Isla</title>
          <meta name="description" content="Ecologically Intelligent Swimwear A commitment to quality. From the inspiration of the design to the inception of the product, everything bearing the LA ISLA name is made with equal consciousness for the environment and for style."/>
          <meta name="keywords" content="La Isla, private label swimwear"/>
          <link rel="canonical" href='https://laislabrand.com/' />
        </Helmet>
        <Hero/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default Home