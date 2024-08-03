import React from 'react'
import './Tabs.scss'
import Arm from '../Assets/shell/armstrong.png'
import Palin from '../Assets/shell/palindrome.png'
import Fibo from '../Assets/shell/fibo.png'
import Fact from '../Assets/shell/factorial.png'
import Login from '../Assets/shell/login or not.png'
import Prime from '../Assets/shell/prime.png'
import Time from '../Assets/shell/time date.png'
import Divisible from '../Assets/shell/divisible.png'
import Mark from '../Assets/shell/mark.png'
const Shell = () => {
  return (
    <div className='tabs-img'>
      <img src={Fibo} alt="" />
      <img src={Fact} alt="" />
      <img src={Login} alt="" />
      <img src={Time} alt="" />
      <img src={Prime} alt="" />
      <img src={Divisible} alt="" />
      <img src={Arm} alt="" />
      <img src={Palin} alt="" />
      <img src={Mark} alt="" />
    </div>
  )
}

export default Shell