import React from 'react'
import'./Card.css';
import image from './image/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.avif'

const card = () => {
  return (
    <div className='cardcontainer'>
        <div className='cardhead'>
      <img src={image}/>
        </div>
      <div className='cardfooter'>
         <ul>
        <li>Name:</li>
        <li>Class:</li>
        <li>Section:</li>
        <li>Address:</li>
         </ul>
      </div>
    </div>
  )
}

export default card
