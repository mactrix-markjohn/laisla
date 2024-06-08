import './Section6SEO.css'
import downarrow from '../../../assets/PrevDown.svg'

const Section6SEO = () => {
  return (
    <div className='Section6SEO'>
      <div className='Section6SEOTop'>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur. Velit feugiat sit a egestas. Nunc parturient id pharetra porttitor aenean leo sit praesent.</p>
      </div>

      <div className='Section6SEOMiddle'>
        <div className='Section6SEOItems'>
          <h1>01</h1>
          <hr/>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur.</p>
        </div>
        <div className='Section6SEOItems'>
          <h1>02</h1>
          <hr/>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur.</p>
        </div>
        <div className='Section6SEOItems'>
          <h1>03</h1>
          <hr/>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sem sodales vulputate non porta ante mauris fringilla non at. Ipsum id proin lectus eget venenatis facilisis adipiscing consectetur.</p>
        </div>
      </div>
      
      <div className='Section6SEOBottom'>
        <div className='Section6SEOEndContent'>
          <h1>Lorem ipsum dolor sit amet consectetur. Malesuada nunc amet</h1>
          <div className='Section6SEOTDAList'>
            <div className='Section6SEOTextDownArrow'>
              <p>Lorem ipsum dolor sit amet</p>
              <img src={downarrow} alt=''/>
            </div>
            <div className='Section6SEOTextDownArrow'>
              <p>Lorem ipsum dolor sit amet</p>
              <img src={downarrow} alt=''/>
            </div>
            <div className='Section6SEOTextDownArrow'>
              <p>Lorem ipsum dolor sit amet</p>
              <img src={downarrow} alt=''/>
            </div>
          </div>
        </div>
        <div className='Section6SEOSpace'/>
        <div className='Section6SEOEndContent'>
          <h1>Lorem ipsum dolor sit amet consectetur. Malesuada nunc amet</h1>
          <div className='Section6SEOTDAList'>
            <div className='Section6SEOTextDownArrow'>
              <p>Lorem ipsum dolor sit amet</p>
              <img src={downarrow} alt=''/>
            </div>
            <div className='Section6SEOTextDownArrow'>
              <p>Lorem ipsum dolor sit amet</p>
              <img src={downarrow} alt=''/>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Section6SEO