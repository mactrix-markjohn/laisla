import './Section2Journal.css'
import { useState } from 'react'
//import model from '../../../assets/journalmodelblue.png'
import prev from '../../../assets/Prev.svg'
import next from '../../../assets/Next.svg'
import article1 from '../../../assets/article1.jpg'
import article2 from '../../../assets/article2.jpg'
import article3 from '../../../assets/article3.jpg'
import article4 from '../../../assets/article4.jpg'
import { Link } from 'react-router-dom'

const Section2Journal = () => {

  const [Journal_Data] = useState([
    {
      j_no:"how-to-start-your-own-swimwear-company",
      j_img:article1,
      j_title:"How to start your own swimwear company",
      j_body:"BY LA ISLA BRAND THIS ARTICLE HAS BEEN UPDATED FOR 2024 I’m so thankful you have arrived here. I wrote this article to help you with valuable information on how to start your own swimwear company. As I reflect upon my journey spanning over two decades in the swimwear industry, I’m struck by how the landscape has evolved. This […]",
      j_date:"JUNE 30, 2024"
    },
    {
        j_no:"white-label-swimwear-vs-private-label-swimwear",
        j_img:article2,
        j_title:"White label swimwear vs. Private label swimwear",
        j_body:"BY LA ISLA BRAND And Why Private Label is Your Best Choice. In the dynamic world of swimwear fashion, creating a distinctive, memorable brand is essential. With many options available for swimwear manufacturing, the choice between white label and private label can significantly impact your brand’s originality and uniqueness. At La Isla, we believe that private label manufacturing is […]",
        j_date:"JUNE 29, 2024"
    },
    {
        j_no:"how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla",
        j_img:article4,
        j_title:"How to find the best swimwear factory for your business: A guide by La Isla",
        j_body:"BY LA ISLA BRAND Are you a business looking to manufacture swimwear, but unsure of where to start? With so many swimwear factories out there, it can be overwhelming to know which one to choose. In this guide, we’ll help you navigate the process and provide insights on what to look for when choosing a swimwear manufacturing partner. Customer […]",
        j_date:"JUNE 28, 2024"
    },
    {
        j_no:"how-to-launch-your-own-swimwear-company-2",
        j_img:article3,
        j_title:"How to launch your own swimwear company",
        j_body:"BY LA ISLA BRAND By: Enrique Sánchez-Rivera, CEO LA ISLA Today marks my 20th year in the swimwear business. Over the past two decades, I have had my fair share of successes and failures, but the most important takeaway has been a crash course in persistence. Unlike many apparel companies, I started LA ISLA with no investors and bootstrapped […]",
        j_date:"JUNE 27, 2024"
    }
  ])

  return (
    <div className='Section2Journal'>
        <div className='Section2JournalContainer'>
            {Journal_Data.map((journal,index)=>{
                return <Link to={`/journal/article/${journal.j_no}`} key={index} className='journal-format'><div >
                    <img src={journal.j_img} alt=''/>
                    <p className='Section2JournalTitle'><b>{journal.j_title}</b></p>
                    <div className='journal-formathr'/>
                    <p className='Section2JournalBody'>{journal.j_body}</p>
                    <p className='Section2Date'>{journal.j_date}</p>
                </div></Link>
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