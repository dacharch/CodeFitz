import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer"className='footer-container'>
         <div className='footer'>
              <div className='footer-right'>
                    <h2 className='codefitz'>Codefitz</h2>
                    <p className='contact-icon'>Contact</p>
                    <p className='email'>Email</p>
              </div>
              <div className='footer-left'>
                    <p>Follow us </p>
                    <div className='icons-container'>
                    <div className='icon'>
                        <FaInstagram className='instagram-icon'/>
                    </div>
                    <div className='icon'>
                         <FaLinkedin  className='linkedin-icon'/>
                    </div>
                    <div className='icon'>
                         <FaFacebook className='facebook-icon'/>
                    </div>
                    </div>
                    

              </div>
         </div>
    </div>
  )
}

export default Footer