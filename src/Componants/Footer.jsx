import React from 'react'
import './Footer.scss'
import footer from '../Assets/footerImg.svg'
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
   <div className="footer" id='contact'>
      <div className="info">
        <h3>Reach Out to me!</h3>
        <p>Discuss A Project Or Just Want To Say Hi ? My Inbox Is Always Open For All!</p>
        <a href="https://www.linkedin.com/in/shubham-desale-3b6963218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FiLinkedin className='icon' />
        </a>
        <a href="https://www.instagram.com/shubham_.desale?igsh=MW1udHVjcTlzajhyeQ==">
        <FaInstagram className='icon'/>
        </a>
        <a href="https://github.com/shubhamdesale2003"> 
        <BsGithub className='icon'/>
        </a>
        <a href="mailto:shubhamhanumantpatil@gmail.com">
        <MdOutlineEmail className='icon'/>
        </a>
        <p>Web Developer || BCA Student || Maharashtra,India</p>
       
      </div>
      <div className="footer-img">
        <img src={footer} alt="" />
      </div>
      <div className="copy">
          <p>Copyright &copy; 2024 Developed With <span>❤ </span>by Shubham Desale.</p>
        </div>
   </div>
  )
}

export default Footer