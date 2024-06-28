import './Section1AbovePrivate.css'
import hero from '../../../assets/seohero.png'
//import heromin from '../../../assets/seohero-min.png'
import heromobile from '../../../assets/seoheromobile.png'
import { Link } from 'react-scroll'
//import ProgressiveImage from 'react-progressive-image'
import ImageComponent from '../../ImageComponent'


const Section1AbovePrivate = () => {
  const hash1 = 'L6EC8y?GELoL1U%Mt6j]s:o#%Lt8'
  const hash1mobile = 'L7EoMWtQrqaJ1UR+t6WVOFM{X8bc'
  return (
    <div className='Section1AbovePrivate'>
        {/* <img className='Section1AbovePrivateimg' src={hero} alt='' loading="lazy" fetchPriority="high"/> */}
        {/* <ProgressiveImage className='Section1AbovePrivateimg' src={hero} placeholder={heromin}>
              {(src, loading) => (
                <img className='Section1AbovePrivateimg' style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
              )}
            </ProgressiveImage> */}
        <div className='Section1AbovePrivateBigScreen'>
          <ImageComponent classnames='Section1AbovePrivateimg' src={hero} hash={hash1} heights='calc(60vw * 9/16)'/>
        </div>

        {/* <img className='Section1AbovePrivateimgmobile' src={heromobile} alt='' loading="lazy" fetchPriority="high"/> */}
        <div className='Section1AbovePrivateMobile'>
          <ImageComponent classnames='Section1AbovePrivateimgmobile' src={heromobile} hash={hash1mobile} heights='calc(230vw * 9/16)'/>
        </div>
        <div className='Section1AbovePrivateContent'>
            <h1>Private Label Swimwear - Create a Stunning Bathing Suit Line</h1>
            <Link to='Section7FAQPrivateLabel' smooth={true} offset={-60} duration={500}><button className='Section1AbovePrivateButton'>LEARN MORE</button></Link>
        </div>
    </div>
  )
}

export default Section1AbovePrivate