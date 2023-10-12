import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div>
    <h1>VBooks
    <ul>
        <nav>
         <li id="list"> <NavLink to='/home'>Home</NavLink></li>
         <li id="list"><NavLink to='/about'>About</NavLink></li>
         <li id="list"><NavLink to='/signin'>SignIn</NavLink></li>
        </nav>
        </ul>
        </h1>
        </div>
        </>
  
  )
}

export default Navbar
