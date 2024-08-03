import React from 'react'
import banner from '../Assets/Ecom/banner1.png'
import pdf from '../Assets/Ecom/E-com-main.zip'
import zip1 from '../Assets/Ecom/Ecom.zip'
import banner3 from '../Assets/Ecom/banner3.png'
import banner4 from '../Assets/Ecom/banner4.png'
import banner2 from '../Assets/Ecom/banner2.png'
import zip2 from '../Assets/Ecom/Feedback.zip'
import zip3 from '../Assets/Ecom/catalog.zip'
import banner5 from '../Assets/Ecom/banner5.png'
import './Ecom.scss'
const Ecom = () => {
  return (
    <>
    <div className="container">
      <h4>1.Download readymade free templates of E-Commerce websites and modify it.</h4>
        <img src={banner} alt="img-loaded"  loading='lazy'/>
       <div>
       <a href={pdf} download>Download Zip</a>
       </div>
       <h4>2.Create simple and static demo webpage for online shopping site.</h4>
       <img src={banner3} alt="img-loaded"  loading='lazy' className="myntra"/>
       <img src={banner4} alt="img-loaded"  loading='lazy'/>
       <div>
       <a href={zip1} download>Download Zip</a>
       </div>
       <h4>3.Create simple and static Feedback Form (web page) for online shopping site.</h4>
       <img src={banner2} alt="img-loaded"  loading='lazy'/>
       <div>
       <a href={zip2} download>Download Zip</a>
       </div>
       <h4>4.Create simple and static demo product catalog web page for online shopping site.</h4>
       <img src={banner5} alt="img-loaded"  loading='lazy'/>
       <div>
       <a href={zip3} download>Download Zip</a>
       </div>
    </div>
    </>
  )
}

export default Ecom