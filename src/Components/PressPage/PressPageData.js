import press1 from '../../assets/press1.jpg'
import press2 from '../../assets/press2.jpg'
import press3 from '../../assets/press3.jpg'
//import press4 from '../../assets/press4.jpg'
//import press5 from '../../assets/press5.jpg'

import SPIOnlineCover from '../../assets/Sports Illustrated/Sports Illustrated - online/IMG_9752.jpeg'
import SPIOnline1 from '../../assets/Sports Illustrated/Sports Illustrated - online/IMG_9750.jpeg'
import SPIOnline2 from '../../assets/Sports Illustrated/Sports Illustrated - online/IMG_9753.jpeg'
import SPIOnline3 from '../../assets/Sports Illustrated/Sports Illustrated - online/IMG_9754.jpeg'
import SPIOnline4 from '../../assets/Sports Illustrated/Sports Illustrated - online/IMG_9755.jpeg'


import SPIMarisa from '../../assets/Sports Illustrated/Sportls Illustrated - Marisa Miller/1202860981_press_detail_image1_img057.jpg'
import SPIMarisa1 from '../../assets/Sports Illustrated/Sportls Illustrated - Marisa Miller/1202860981_press_detail_image2_img058.jpg'
import SPIMarisa2 from '../../assets/Sports Illustrated/Sportls Illustrated - Marisa Miller/1202862859_press_detail_image3_img059.jpg'




import SPIGigi from '../../assets/Sports Illustrated/Sports Illustrated - Gigi Hadid/SI Cover.png'
import SPILucia from '../../assets/Sports Illustrated/Sports Illustrated - Lucia Dvorska/Cover.jpg'
import SPIWeb from '../../assets/Sports Illustrated/Sports Illustrated Web/08_marisa-miller_body_01.jpg'
import SPIBehind from '../../assets/Sports Illustrated/Sports Illustrated Behind the Scenes/Picture 1 13-01-09.png'


const Press_Page = [
    {
        j_no:"sports-illustrated-online",
        j_img:SPIOnlineCover,
        j_gallery: [SPIOnlineCover,SPIOnline1, SPIOnline2, SPIOnline3,SPIOnline4],
        j_title:"Sports Illustrated - online",
        j_body:"",
        j_date:""
      },
      {
          j_no:"sports-illustrated-marisa-miller",
          j_img:SPIMarisa,
          j_gallery: [SPIMarisa,SPIMarisa1, SPIMarisa2],
          j_title:"Sports Illustrated - Marisa Miller",
          j_body:"",
          j_date:""
      },
      {
          j_no:"sports-illustrated-gigi-hadid",
          j_img:SPIGigi,
          j_gallery: [SPIGigi,press1, press2, press3],
          j_title:"Sports Illustrated - Gigi Hadid",
          j_body:"",
          j_date:""
      },
      {
          j_no:"sports-illustrated-lucia-dvorska",
          j_img:SPILucia,
          j_gallery: [SPILucia,press1, press2, press3],
          j_title:"Sports Illustrated - Lucia Dvorska",
          j_body:"",
          j_date:""
      },
      {
          j_no:"sports-illustrated-web",
          j_img:SPIWeb,
          j_gallery: [SPIWeb,press1, press2, press3],
          j_title:"Sports Illustrated Web",
          j_body:"",
          j_date:""
      },
      {
          j_no:"sports-illustrated-behind-the-scenes",
          j_img:SPIBehind,
          j_gallery: [SPIBehind,press1, press2, press3],
          j_title:"Sports Illustrated Behind the Scenes",
          j_body:"",
          j_date:""
      }
  ];

  export default Press_Page;