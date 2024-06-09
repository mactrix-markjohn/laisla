import './Section4Interna.css'
import model from '../../../assets/internathird.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Section4Interna = () => {

    const [Journal_Data] = useState([
        {
          j_no:1,
          j_img:model,
          j_title:"Lorem ipsum dolor sit amet consectetur.",
          j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
          j_date:"NOVEMBER 2, 2023"
        },
        {
            j_no:6,
            j_img:model,
            j_title:"Lorem ipsum dolor sit amet consectetur.",
            j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
            j_date:"NOVEMBER 2, 2023"
        }
      ])


  return (
    <div className='Section4Interna'>
        <h1>Most read</h1>
        <div className='Section4InternaHR'>
            <hr/>
        </div>
        <div className='Section4InternaContainer'>
            {Journal_Data.map((journal,index)=>{
                return <Link to={''} key={index} ><div className='interna-format'>
                    <img src={journal.j_img} alt=''/>
                    <div>
                        <p className='Section4InternaTitle'><b>{journal.j_title}</b></p>
                        <hr/>
                        <p className='Section4InternaDate'>{journal.j_date}</p>
                    </div>
                    
                </div></Link>
            })}
        </div>
    </div>
  )
}

export default Section4Interna