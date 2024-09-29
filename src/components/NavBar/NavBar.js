import React from 'react'
import "./NavBar.css"
import logo from "../../images/icon.svg"


 const NavBar = () => {
  return (
    <div className='nav-bar'>
    <div>
    <img  className="logo" src={logo} alt="image not found"/>
    </div>
    
      <div className='url-list'>
          <ul>
             <li> 
              <a href="#">Home</a>
            </li>
             <li>
              <a href="#services">Services</a>
              </li>
          
            <li>
               <a href="#footer">About</a>
            </li>
          </ul>
      </div>     
        
    </div>
  )
}

export default NavBar ;