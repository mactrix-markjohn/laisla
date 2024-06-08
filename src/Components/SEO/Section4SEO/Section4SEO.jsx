import './Section4SEO.css'
import heart from '../../../assets/Heart.svg'
import check from '../../../assets/Check.svg'
import { useState } from 'react'

const Section4SEO = () => {
  const [SEO_Data] = useState([
    {
      s_no:1,
      s_heart:heart,
      s_title:"Lorem ipsum dolor",
      s_listitem:"Lorem ipsum dolor sit amet",
      s_itemimage:check
    },
    {
      s_no:2,
      s_heart:heart,
      s_title:"Lorem ipsum dolor",
      s_listitem:"Lorem ipsum dolor sit amet",
      s_itemimage:check
    },
    {
      s_no:3,
      s_heart:heart,
      s_title:"Lorem ipsum dolor",
      s_listitem:"Lorem ipsum dolor sit amet",
      s_itemimage:check
    },
    {
      s_no:4,
      s_heart:heart,
      s_title:"Lorem ipsum dolor",
      s_listitem:"Lorem ipsum dolor sit amet",
      s_itemimage:check
    }
  ])


  return (
    <div className='Section4SEO'>
      <div className='Section4SEOTop'>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.</p>
      </div>
      <div className='Section4SEOBottom'>
        {SEO_Data.map((seo,index)=>{
          return <div key={index} className='seolist-format'>
            <div className='SEO4Listtop'>
              <img className='Section4SEOListImg' src={seo.s_heart} alt=''/>
              <h3>{seo.s_title}</h3>
              <hr/>
            </div>
            
            <div className='SEO4List'>
              <img src={seo.s_itemimage} alt=''/>
              <p>{seo.s_listitem}</p>
            </div>
            <div className='SEO4List'>
              <img src={seo.s_itemimage} alt=''/>
              <p>{seo.s_listitem}</p>
            </div>
            <div className='SEO4List'>
              <img src={seo.s_itemimage} alt=''/>
              <p>{seo.s_listitem}</p>
            </div>
            <div className='SEO4List'>
              <img src={seo.s_itemimage} alt=''/>
              <p>{seo.s_listitem}</p>
            </div>
          </div>
        })} 
      </div>
    </div>
  )
}

export default Section4SEO