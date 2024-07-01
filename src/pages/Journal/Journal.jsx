import './Journal.css'
import Section1Journal from '../../Components/Journal/Section1Journal/Section1Journal'
import Section2Journal from '../../Components/Journal/Section2Journal/Section2Journal'
import { Helmet } from 'react-helmet'

const Journal = () => {
  return (
    <div>
      <Helmet>
        <title>Journal</title>
        <meta name="description" content="Articles about how to start your own swimwear company are discussed here."/>
        <meta name="keywords" content="private label swimwear, private label bathing suits, swimwear, white label swimwear, bathing suits"/>
        <link rel="canonical" href='https://laislabrand.com/journal' />
      </Helmet>
        <Section1Journal/>
        <Section2Journal/>
    </div>
  )
}

export default Journal