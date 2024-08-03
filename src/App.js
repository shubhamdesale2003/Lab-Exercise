import React from 'react'
import Header from './Componants/Header'
import Footer from './Componants/Footer'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Componants/Home'
import Router from './Componants/Router'
import Ecom from './Componants/Ecom'
import Prac from './Componants/Prac'
import Java from './Componants/Java'
import Cpp from './Componants/cpp'
import Shell from './Componants/Shell'
import ML from './Componants/ML'
import AI from './Componants/AI'
import DS from './Componants/DS'

const App = () => {
  return (
    <BrowserRouter>
         <Header />
         <Home />
         <Router />
         <Routes>
          <Route path='/' element={<Prac />}></Route>
          <Route path='/e-com' element={<Ecom />}></Route>
          <Route path='/java' element={<Java />}></Route>
          <Route path='/cpp' element={<Cpp />}></Route>
          <Route path='/shell' element={<Shell />}></Route>
          <Route path='/ml' element={<ML />}></Route>
          <Route path='/ai' element={<AI />}></Route>
          <Route path='/ds' element={<DS />}></Route>
         </Routes>
         <Footer />
         
   </BrowserRouter>
    
  )
}

export default App