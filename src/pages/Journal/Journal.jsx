import React from 'react'
import './Journal.css'
import Section1Journal from '../../Components/Journal/Section1Journal/Section1Journal'
import Section2Journal from '../../Components/Journal/Section2Journal/Section2Journal'

const Journal = () => {
  return (
    <div>
        <Section1Journal/>
        <Section2Journal/>
    </div>
  )
}

export default Journal