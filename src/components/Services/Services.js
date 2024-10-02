import React from 'react'
import "./Services.css"

const Courses = () => {
  return (
    <div id="services"className='course-container'>
         <div className='sub-container'>
             <h2 className='title'> Our Services</h2>
          <div className='box-container'>
               <div className='box'>
                   <p className='text-font'>Want to Learn AI and latest tech?</p>
                   <button>
                        Check Courses
                   </button>
               </div>
               <div className='box'>
                    <p className='text-font'>Want to educate underprivileged kids</p>
                    <button>Support</button>
               </div>
          </div>
             
         </div>
        
    </div>
  )
}

export default Courses