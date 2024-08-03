import React from 'react'
import './Home.scss'
import banner from '../Assets/Banner.jpeg'
const Home = () => {
  return (
   <div className="home">
     <h2>Welcome to the Lab Exercise Website!</h2>
     <div className="banner">
      <img src={banner} alt="" />
     </div>
     <h3>Introduction to the Lab Exercises:</h3>
     <h4>Our lab exercises cover various programming languages assignments | 
      including E-Commerce, Java, Python, Shell, AI, ML, DS, C++.| 
      Explore each section to find assignments, | 
      and that will help you deepen your understanding | and enhance your skills.</h4>
   </div>
  )
}

export default Home