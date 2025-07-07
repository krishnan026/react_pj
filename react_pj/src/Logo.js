import React from 'react'
import './logo.css';
import image from './image/education-badge-logo-design-university-high-school-emblem-education-badge-logo-design-university-high-school-emblem-151924849.webp'

const logo = () => {
  return (
    <div className='logobar'>
       <img src={image} alt="My Image" />
    </div>
  )
}

export default logo
