import React from 'react'
import "./NavBar.css"
import logo from "../../images/icon.svg"

export const NavBar = () => {
  return (
    <div className='nav-bar'>
    <div>
    <img  className="logo" src={logo} alt="image not found"/>
    </div>
    
      <div className='url-list'>
          <ul>
             <li> 
              <a>Home</a>
            </li>
             <li>
              <a>About</a>
              </li>
             <li>
               <a>Contact</a>
            </li>
          </ul>
      </div>     
        
    </div>
  )
}
