import './ArticleSection.css'
import hero from '../../assets/internatitle.png'
import heromobile from '../../assets/internatitlemobile.png'

//import yellowquote from '../../assets/yellowquote.svg'

//import model from '../../assets/internasecond.png'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import article1 from '../../assets/article1.jpg'
import article2 from '../../assets/article2.jpg'
import article3 from '../../assets/article3.jpg'
import article4 from '../../assets/article4.jpg'

import {body1 as article1Body1, body2 as article1Body2, body3 as article1Body3 } from '../../Components/Article/ArticleContent/article1Content';
import {body1 as article2Body1, body2 as article2Body2, body3 as article2Body3 } from '../../Components/Article/ArticleContent/article2Content';
import {body1 as article3Body1, body2 as article3Body2, body3 as article3Body3 } from '../../Components/Article/ArticleContent/article3Content';
import {body1 as article4Body1, body2 as article4Body2, body3 as article4Body3 } from '../../Components/Article/ArticleContent/article4Content';
import { Helmet } from 'react-helmet'
import ImageComponent from '../ImageComponent'


const ArticleSection = () => {

    const hash1 = 'L4A^az~900Ri?c-=%NMwD$t8^,WY'
    const hash1mobile = 'LDD9;m%Ladxt~UtR%Mt7V;RjjuWX'

    const [Journal_Article] = useState([
        {
          j_no:"how-to-start-your-own-swimwear-company",
          j_img:article1,
          j_title:"How to start your own swimwear company",
          j_subtitle:"BY LA ISLA BRAND: THIS ARTICLE HAS BEEN UPDATED FOR 2024",
          j_body1: article1Body1,
          j_body2:article1Body2,
          j_body3:article1Body3,
          j_date:"JUNE 30, 2024"
        },
        {
            j_no:"white-label-swimwear-vs-private-label-swimwear",
            j_img:article2,
            j_title:"White Label Swimwear vs. Private Label Swimwear",
            j_subtitle:"And Why Private Label is Your Best Choice.",
            j_body1: article2Body1,
            j_body2:article2Body2,
            j_body3:article2Body3,
            j_date:"JUNE 29, 2024"
        },
        {
            j_no:"how-to-find-the-best-swimwear-factory-for-your-business-a-guide-by-la-isla",
            j_img:article4,
            j_title:"How to find the best swimwear factory for your business: A guide by La Isla",
            j_subtitle:"BY LA ISLA BRAND",
            j_body1: article4Body1,
            j_body2:article4Body2,
            j_body3:article4Body3,
            j_date:"JUNE 28, 2024"
        },
        {
            j_no:"how-to-launch-your-own-swimwear-company-2",
            j_img:article3,
            j_title:"How to launch your own swimwear company",
            j_subtitle:"By: Enrique Sánchez-Rivera, CEO LA ISLA",
            j_body1: article3Body1,
            j_body2:article3Body2,
            j_body3:article3Body3,
            j_date:"JUNE 27, 2024"
        }
      ])

    const {articleId} = useParams();

    const [Journal_Data] = useState([
        {
          j_no:"how-to-start-your-own-swimwear-company",
          j_img:article1,
          j_title:"How to start your own swimwear company",
          j_subtitle:"",
          j_body1:"BY LA ISLA BRAND THIS ARTICLE HAS BEEN UPDATED FOR 2024 I’m so thankful you have arrived here. I wrote this article to help you with valuable information on how to start your own swimwear company. As I reflect upon my journey spanning over two decades in the swimwear industry, I’m struck by how the landscape has evolved. This […]",
          j_body2:"",
          j_body3:"",
          j_date:"JUNE 30, 2024"
        },
        {
            j_no:"how-to-launch-your-own-swimwear-company-2",
            j_img:article3,
            j_title:"How to launch your own swimwear company",
            j_subtitle:"",
            j_body1:"BY LA ISLA BRAND By: Enrique Sánchez-Rivera, CEO LA ISLA Today marks my 20th year in the swimwear business. Over the past two decades, I have had my fair share of successes and failures, but the most important takeaway has been a crash course in persistence. Unlike many apparel companies, I started LA ISLA with no investors and bootstrapped […]",
            j_body2:"",
            j_body3:"",
            j_date:"JUNE 27, 2024"
        }
      ])


    const index = Journal_Article.findIndex(article => article.j_no === articleId);

      // Handle case when the article is not found
    if (index === -1) {
        return <div>Article not found</div>;
    }

    // Extract the matching entry
    const selectedArticle = Journal_Article[index];

  return (
    <div>
        <Helmet>
            <title>{selectedArticle.j_title} | La Isla</title>
            <meta name="description" content={selectedArticle.j_subtitle}/>
            <meta name="keywords" content="La Isla, private label swimwear, swimwear"/>
            <link rel="canonical" href={`https://laislabrand.com/journal/article/${selectedArticle.j_no}`} />
        </Helmet>

        <div className='Article1Interna'>
            <div className='Article1InternaBigScreen'>
                {/* <img className='Article1Internaimg' src={hero} alt='' loading="lazy" fetchPriority="high"/> */}
                <ImageComponent classnames='Article1Internaimg' src={hero} hash={hash1} heights='calc(60vw * 9/16)'/>
            </div>
            <div className='Article1InternaMobile'>
                {/* <img className='Article1Internaimgmobile' src={heromobile} alt='' loading="lazy" fetchPriority="high"/> */}
                <ImageComponent classnames='Article1Internaimgmobile' src={heromobile} hash={hash1mobile} heights='calc(160vw * 9/16)'/>
            </div>
        </div>

        <div className='Article2Interna'>
            <h1>{selectedArticle.j_title}</h1>
            <p className='Article2InternaDate'>{selectedArticle.j_date}</p>
            <p className='Article2InternaP'></p>
            <div className='Article2InternaGrayBox'>
                {/* <img src={yellowquote} alt=''/> */}
                <p>{selectedArticle.j_subtitle}</p>
            </div>
        </div>

        <div className='Article3Interna'>
            <h2></h2>
            <p className='Article3InternaFirstP' dangerouslySetInnerHTML={{ __html: selectedArticle.j_body1 }}></p>
            <div className='Article3InternaRow'>
                <img src={selectedArticle.j_img} alt='' loading="lazy" fetchPriority="high"/>
                <p dangerouslySetInnerHTML={{ __html: selectedArticle.j_body2 }}></p>
            </div>
            <p className='Article3InternaSecondP' dangerouslySetInnerHTML={{ __html: selectedArticle.j_body3 }}></p>
        </div>


        <div className='Article4Interna'>
            <h2>Most read</h2>
            <div className='Article4InternaHR'>
                <div className='Article4InternaHRhr'/>
            </div>
            <div className='Article4InternaContainer'>
                {Journal_Data.map((journal,index)=>{
                    return <Link to={`/journal/article/${journal.j_no}`} key={index} ><div className='interna-format'>
                        <img src={journal.j_img} alt='' loading="lazy" fetchPriority="high"/>
                        <div className='internaformatdiv'>
                            <p className='Article4InternaTitle'>{journal.j_title}</p>
                            <hr className='internaformathr'/>
                            <p className='Article4InternaDate'>{journal.j_date}</p>
                        </div>
                        
                    </div></Link>
                })}
            </div>
        </div>

    </div>
    
    
    


  )
}

export default ArticleSection