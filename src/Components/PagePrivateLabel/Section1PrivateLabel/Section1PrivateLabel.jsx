import './Section1PrivateLabel.css'
import model from '../../../assets/privatefirstmodel.png'
import modelsecond1 from '../../../assets/privatesecondmodel1.png'
import modelsecond2 from '../../../assets/privatesecondmodel2.png'

const Section1PrivateLabel = () => {
  return (
    <div className='Section1PrivateLabel'>
        <div className='Section1Private1'>
            <div className='Section1PrivateTextRegion'>
                <h2>Our Private Label Swimwear Factory In Colombia Is Ethically Operated & Free Trade Ready</h2>
                <div className='Section1PrivateTextRegionhr'/>
                <p>
                La Isla strategically maintains offices in the United States (Portland, Oregon), positioning ourselves as a bridge between our clients and our bustling manufacturing hub in Medellín, Colombia. This dual presence not only ensures clear and efficient communication but also provides our clients with the peace of mind that comes with having a local point of contact. With our US offices, we offer a responsive and accessible support system, addressing any concerns or queries promptly and effectively. <b>Several of our existing clients have encountered challenges with overseas dealings and communications, prompting them to choose our services instead.</b>
                </p>
            </div>
            <div className='Section1PrivateImageRegion'>
                <img src={model} alt=''/>
            </div>

        </div>
        
        {/* message prop requires a string */}
        <div className='Section1Private2'>
            <div className='Section1PrivateImageRegion2'>
                <img src={modelsecond1} alt=''/>
                <div/>
                <img src={modelsecond2} alt=''/>
            </div>
            <div className='Section1PrivateTextRegion2'>
                <p>
                <b>We are a full service swimwear manufacturing and sourcing company, with access to state of the art equipment and highly skilled personnel.</b> We specialize in the sourcing manufacturing of private label women’s swimwear, private label bikinis, private label yoga wear, athleisure garments, board shorts, rash guards, and other apparel for the active wear segment. Our capabilities include but are not limited to pattern making, sampling, full package, design, and hand and machine embroidery. We manufacture a broad range of swimwear styles, from contemporary, to cup size, children’s and more!
                </p>
            </div>
            
        </div>

    </div>
  )
}

export default Section1PrivateLabel