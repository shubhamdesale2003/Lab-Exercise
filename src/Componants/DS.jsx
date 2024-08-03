import React from 'react'
import './Tabs.scss'
import Binary from '../Assets/dsimg/Binary.png'
import Bubble from '../Assets/dsimg/bubble.png'
import Insertion from '../Assets/dsimg/inserImg.png'
import Linear from '../Assets/dsimg/linear2.png'
import Quick from '../Assets/dsimg/quick.png'
import Selection from '../Assets/dsimg/selection.png'
const DS = () => {
  return (
    <div className='tabs-img'>
      <img src={Bubble} alt="" />
      <img src={Quick} alt="" />
      <img src={Selection} alt="" />
      <img src={Insertion} alt="" />
      <img src={Linear} alt="" />
      <img src={Binary} alt="" />
    </div>
  )
}

export default DS