import React from 'react'
import { NavLink } from 'react-router-dom'
import './Router.scss'
const Router = () => {
  return (
    <>
        <div className="row">
           <NavLink to="/">All</NavLink>
           <NavLink to="/e-com">E-Com</NavLink>
           <NavLink to="/java">Java</NavLink>
           <NavLink to="/cpp">C++</NavLink>
           <NavLink to="/shell">Shell</NavLink>
           <NavLink to="/ml">ML</NavLink>
          <NavLink to="/ai">AI</NavLink>
          <NavLink to="/ds">DS</NavLink>
        </div>
    </>
  )
}

export default Router