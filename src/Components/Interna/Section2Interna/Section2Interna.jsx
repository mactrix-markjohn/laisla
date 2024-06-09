import './Section2Interna.css'
import yellowquote from '../../../assets/yellowquote.svg'

const Section2Interna = () => {
  return (
    <div className='Section2Interna'>
        <h1>Title</h1>
        <p className='Section2InternaDate'>NOVEMBER 2, 2023</p>
        <p className='Section2InternaP'>Lorem ipsum dolor sit amet consectetur. Lacus id semper cursus massa at elementum sodales turpis molestie. Tristique a consectetur sit et neque eu hendrerit diam. Egestas viverra eu senectus pretium.</p>
        <div className='Section2InternaGrayBox'>
            <img src={yellowquote} alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur. Non mattis sem.</p>
        </div>
    </div>
  )
}

export default Section2Interna