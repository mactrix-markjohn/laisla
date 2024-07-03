import { useParams } from 'react-router-dom'
import './PressPageSection.css'

import press1 from '../../assets/press1.jpg'
import press2 from '../../assets/press2.jpg'
import press3 from '../../assets/press3.jpg'
import press4 from '../../assets/press4.jpg'
import press5 from '../../assets/press5.jpg'

import { useState } from 'react'

import { Helmet } from 'react-helmet'
//import ImageComponent from '../ImageComponent'



const PressPagePageSection = () => {

    const [Press_Page] = useState([
        {
            j_no:"sports-illustrated",
            j_img:press1,
            j_title:"SPORTS ILLUSTRATED",
            j_body:"",
            j_date:""
          },
          {
              j_no:"deep-impact-360fs",
              j_img:press2,
              j_title:"DEEP IMPACT 360FS",
              j_body:"",
              j_date:""
          },
          {
              j_no:"raymarine",
              j_img:press4,
              j_title:"RAYMARINE",
              j_body:"",
              j_date:""
          },
          {
              j_no:"icom-ic-m24-float-n-flash",
              j_img:press3,
              j_title:"ICOM IC-M24 FLOAT 'N FLASH",
              j_body:"",
              j_date:""
          },
          {
              j_no:"tahoe-225",
              j_img:press5,
              j_title:"TAHOE 225",
              j_body:"",
              j_date:""
          }
      ])

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
                <img className='PressPage1Internaimg' src={selectedPress.j_img} alt='' loading="lazy" fetchPriority="high"/> 
                {/* <ImageComponent classnames='PressPage1Internaimg' src={hero} hash={hash1} heights='calc(60vw * 9/16)'/> */}
            </div>
            <div className='PressPage1InternaMobile'>
                <img className='PressPage1Internaimgmobile' src={selectedPress.j_img} alt='' loading="lazy" fetchPriority="high"/>
                {/* <ImageComponent classnames='PressPage1Internaimgmobile' src={heromobile} hash={hash1mobile} heights='calc(160vw * 9/16)'/> */}
            </div>
        </div>

    </div>
    
    
  )
}

export default PressPagePageSection