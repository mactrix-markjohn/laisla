import './Section4PrivateLabel.css'
import check from '../../../assets/Check.svg'

const Section4PrivateLabel = () => {
  return (
    <div className='Section4PrivateLabel'>

        <div className='Section4PrivateText'>
            <div className='Section4PrivateTextRegionLeft'>
                <h2>Material Sourcing</h2>
                <hr/>
                <div>
                    <div className='Section4PrivateCheckText'>
                        <img src={check} alt=''/>
                        <div/>
                        <p>Worldwide fabric and trim sourcing.</p>
                    </div>
                    <div className='Section4PrivateCheckText'>
                        <img src={check} alt=''/>
                        <div/>
                        <p>Purchasing of raw material and trims for full package program.</p>
                    </div>
                    <div className='Section4PrivateCheckText'>
                        <img src={check} alt=''/>
                        <div/>
                        <p>Maquila programs.</p>
                    </div>
                </div>
            </div>

            <div className='Section4PrivateTextRegionRight'>
                <h2>Consulting</h2>
                <hr/>
                <p>
                The success of our clients, which we depend on, begins at the manufacturing stage, but it certainly doesn’t end there. We are conscious and understand that our success depends on our clients’ success. Their sales translate into sales for us. This is why we offer our expertise in the industry to help companies position their brands in the market. We offer customized consulting services which are ideal for new brands or for those who find themselves “stuck” or on a “plateau”.
                </p>
            </div>

        </div>

        <div className='Section4PrivateContact'>
          <button className='Section4PrivateContactBtn'>CONTACT US</button>
        </div>

    </div>
  )
}

export default Section4PrivateLabel