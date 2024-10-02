import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/icon.svg"
import "./NavBar.css"



const NavBar = () => {
  const[isOpen,setOpen] = useState(true) ;

  const openMenu = ()=>{
      setOpen(!isOpen) 

  }


  return (
    <div className='nav-bar'>
    <div>
       <img  className="logo" src={logo} alt="image not found"/>
    </div>
   
      
      <div className={isOpen ?"url-list":"active"}>
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

      <div className='icons'>
         <MenuIcon className='icon-bar' onClick={openMenu}/>
      </div>     
       
    </div>
  )
}

export default NavBar ;