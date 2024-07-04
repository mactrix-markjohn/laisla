import { useParams } from 'react-router-dom'
import './PressPageSection.css'

import { Helmet } from 'react-helmet'
//import ImageComponent from '../ImageComponent'

import Press_Page from './PressPageData'



const PressPagePageSection = () => {

    const {pressId} = useParams();

    const index = Press_Page.findIndex(press => press.j_no === pressId);

      // Handle case when the press is not found
    if (index === -1) {
        return <div>PressPage not found</div>;
    }

    // Extract the matching entry
    const selectedPress = Press_Page[index];

  return (
    <div>
        <Helmet>
            <title>{selectedPress.j_title} | La Isla</title>
            <meta name="description" content={selectedPress.j_title}/>
            <meta name="keywords" content="La Isla, private label swimwear, swimwear"/>
            <link rel="canonical" href={`https://laislabrand.com/press/${selectedPress.j_no}`} />
        </Helmet>


        <div className='Section1PressPage'>
            <div className='Section1PressPageContent'>
                <h2>{selectedPress.j_title}</h2>
                <div className='Section1PressPageContenthr'/>
            </div>
        </div>

        <div className='PressPage1Interna'>
            <div className='PressPage1InternaBigScreen'>
                {/* <img className='PressPage1Internaimg' src={selectedPress.j_img} alt='' loading="lazy" fetchPriority="high"/> */}
                {selectedPress.j_gallery.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Press Image ${index}`}
                        style={{
                            width: '100%'
                        }}
                     />
                    ))} 
                {/* <ImageComponent classnames='PressPage1Internaimg' src={hero} hash={hash1} heights='calc(60vw * 9/16)'/> */}
            </div>
            <div className='PressPage1InternaMobile'>
                {/* <img className='PressPage1Internaimgmobile' src={selectedPress.j_img} alt='' loading="lazy" fetchPriority="high"/> */}
                {selectedPress.j_gallery.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Press Image ${index}`}
                        style={{
                            width: '100%'
                        }}
                     />
                    ))} 
                {/* <ImageComponent classnames='PressPage1Internaimgmobile' src={heromobile} hash={hash1mobile} heights='calc(160vw * 9/16)'/> */}
            </div>
        </div>

    </div>
    
    
  )
}

export default PressPagePageSection