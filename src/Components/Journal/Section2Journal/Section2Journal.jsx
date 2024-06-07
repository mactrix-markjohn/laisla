import './Section2Journal.css'
import { useState } from 'react'
import model from '../../../assets/journalmodelblue.png'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'

const Section2Journal = () => {

  const [Journal_Data] = useState([
    {
      j_no:1,
      j_img:model,
      j_title:"Lorem ipsum dolor sit amet consectetur.",
      j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
      j_date:"NOVEMBER 2, 2023"
    },
    {
        j_no:2,
        j_img:model,
        j_title:"Lorem ipsum dolor sit amet consectetur.",
        j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
        j_date:"NOVEMBER 2, 2023"
    },
    {
        j_no:3,
        j_img:model,
        j_title:"Lorem ipsum dolor sit amet consectetur.",
        j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
        j_date:"NOVEMBER 2, 2023"
    },
    {
        j_no:4,
        j_img:model,
        j_title:"Lorem ipsum dolor sit amet consectetur.",
        j_body:"Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.",
        j_date:"NOVEMBER 2, 2023"
    },
    {
        j_no:5,
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
    <div className='Section2Journal'>
        <div className='Section2JournalContainer'>
            {Journal_Data.map((journal,index)=>{
                return <div key={index} className='journal-format'>
                    <img src={journal.j_img} alt=''/>
                    <p className='Section2JournalTitle'><b>{journal.j_title}</b></p>
                    <hr/>
                    <p className='Section2JournalBody'>{journal.j_body}</p>
                    <p className='Section2Date'>{journal.j_date}</p>
                </div>
            })}
        </div>
        <div className='Section2JournalNextPrevHolder'>
          <div className='Section2JournalNextPrev'>
            <button className='Section2JournalcontactBtn'><img src={prev} alt=''/></button>
            <div className='Section2JournalNumbers'>
              <button><p className='numbold'>1</p></button>
              <button><p className='num'>2</p></button>
              <button><p className='num'>3</p></button>
              <button><p className='num'>4</p></button>
              <button><p className='num'>5</p></button>
            </div>
            
            <button className='Section2JournalcontactBtn'><img src={next} alt=''/></button>
                
          </div>
        </div>
    </div>
  )
}

export default Section2Journal