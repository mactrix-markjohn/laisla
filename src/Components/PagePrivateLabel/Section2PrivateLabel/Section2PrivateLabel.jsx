import './Section2PrivateLabel.css'
import model from '../../../assets/privatethirdmodel.png'
import check from '../../../assets/Check.svg'  

const Section2PrivateLabel = () => {
  return (
    <div className='Section2PrivateLabel'>
        <div className='Section2PrivateImageRegion'>
            <img src={model} alt=''/>
        </div>
        <div className='Section2PrivateTextRegion'>
            <h2>Capabilities</h2>
            <hr/>
            <div>
                <div className='Section2PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p><b>We’re women’s swimwear specialists.</b> Techniques include: double stitch, zig-zag, decorative and lurex stitching, seamless, laser, embroidery, macrame, digital printing, rotary printing, placement printing, and much more.</p>
                </div>
                <div className='Section2PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p><b>Our minimums are 200 pieces per style</b> Up to two colorways or prints or a combination of both.</p>
                </div>
                <div className='Section2PrivateCheckText'>
                    <img src={check} alt=''/>
                    <div/>
                    <p><b>Included in full package pricing are (depending on order and styles):</b><br/>All fabrics, linings, accessories, hardware, threads, branded hygienic protectors (if quantities over 2,000 units total), cups, underwires, boning, printed or woven labels, hang tags, individual resealable bags and any other necessary items needed per client’s order.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Section2PrivateLabel