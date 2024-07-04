import './Section2Press.css'

//import model from '../../../assets/pressmodelblue.png'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import { Link } from 'react-router-dom'
import Press_Data from '../PressData'

const Section2Press = () => {
    
    
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