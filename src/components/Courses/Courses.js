import React from 'react'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='course-container'>
         <div className='sub-container'>
             <h2 className='title'>Courses</h2>
          <div className='box-container'>
               <div className='box'>
                   <h2>Want to Learn AI and latest tech?</h2>
                   <button>
                        Check Courses
                   </button>
               </div>
               <div className='box'>
                    <h2>Want to educate underprivileged kids</h2>
                    <button>Support</button>
               </div>
          </div>
             
            
         </div>
        
    </div>
  )
}

export default Courses