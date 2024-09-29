import { useState } from "react"
import ContactForm from "../Form/ContactForm"
import "./Hero.css"





const Hero = () => {
   const [show,setShow] = useState(false) ;
   return (
    <>
       {show && <ContactForm/>}
       <div id="Hero" className="hero-container">
           <h1>
             We bring Customer for your brands<br/> and Products using Artifical <br/>Intelligence
           </h1>
           <button className="contact-btn" onClick={()=>setShow(true)}>
              Contact
           </button>
       </div>     
    
    </>
        
  )
}

export default Hero