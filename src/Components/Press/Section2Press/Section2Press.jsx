import './Section2Press.css'
import { useState } from 'react'
//import model from '../../../assets/pressmodelblue.png'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import press1 from '../../../assets/press1.jpg'
import press2 from '../../../assets/press2.jpg'
import press3 from '../../../assets/press3.jpg'
import press4 from '../../../assets/press4.jpg'
import press5 from '../../../assets/press5.jpg'
import { Link } from 'react-router-dom'

const Section2Press = () => {
    const [Press_Data] = useState([
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
    
      return (
        <div className='Section2Press'>
            <div className='Section2PressContainer'>
                {Press_Data.map((press,index)=>{
                    return <Link to={`/press/${press.j_no}`} key={index} className='press-format'><div >
                        <img src={press.j_img} alt=''/>
                        <p className='Section2PressTitle'><b>{press.j_title}</b></p>
                        <div className='press-formathr'/>
                        {/* <div className='press-formathr'/>
                        <p className='Section2PressBody'>{press.j_body}</p>
                        <p className='Section2Date'>{press.j_date}</p> */}
                    </div></Link>
                })}
            </div>
            <div className='Section2PressNextPrevHolder'>
              <div className='Section2PressNextPrev'>
                <button className='Section2PresscontactBtn'><img src={prev} alt=''/></button>
                <div className='Section2PressNumbers'>
                  <button><p className='numbold'>1</p></button>
                  <button><p className='num'>2</p></button>
                  <button><p className='num'>3</p></button>
                  <button><p className='num'>4</p></button>
                  <button><p className='num'>5</p></button>
                </div>
                
                <button className='Section2PresscontactBtn'><img src={next} alt=''/></button>
                    
              </div>
            </div>
        </div>
      )
}

export default Section2Press