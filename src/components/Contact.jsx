import React from 'react'
import '../components/Contact.css'

const contact = () => {
  return (
    <div className='main'>
        <h1>Contact <span>ME</span></h1>
        <h2>LETS <span>TALK</span></h2>
        <input className='name  btn'   type="text" placeholder='Name'/>
        <input className='email  btn'  type="email" placeholder='Email'/><br />
        <textarea className='desc  btn' type="text" placeholder='Description'/><br />
       
       <button className='btn'>Submit</button>

    </div>
  )
}

export default contact