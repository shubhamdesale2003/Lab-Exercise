import React from 'react'
import Logo from '../Assets/LOGO.png'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='nav-bar'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <Link to="#home">Home</Link>
          <Link to="#contact">Contact</Link>
        </div>
        <div className="icon">&#9776;</div>
      </nav>
    </>
  )
}

export default Header