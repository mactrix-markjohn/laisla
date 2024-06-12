import './SectionThree.css'
import modelwhite from '../../assets/secondmodelwhite.png'
import modelpink from '../../assets/secondmodelpink.png'


const SectionThree = () => {
  return (
    <div className='SectionThree'>
        <div className='threeTextRegion'>
            <p>
            Our long and amazing journey began with a commitment to excellence, serving some of the most renowned brands worldwide. From household names to emerging names, our portfolio boasts a diverse array of clients who trust us to bring their swimwear visions to life. <br/><br/>At La Isla, we offer a comprehensive range of manufacturing services tailored to suit the needs of brands of all sizes. Whether you're seeking simple designs or intricate creations featuring embroidery, underwires, and custom cup sizes, our dedicated team is here for you.
            </p>
        </div>
        <div className='threeImageRegion'>
            <img src={modelwhite} alt=''/>
            <div/>
            <img src={modelpink} alt=''/>
        </div>

    </div>
  )
}

export default SectionThree