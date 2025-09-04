import React from 'react'
import './Cont.css'
import boy from '../assets/Boylogo.png'

function Cont() {
  return (
    <div className='cont'>
       <div className="contact-box">
        <div className="contact-form">
            <h1>Contact</h1>
            <form>
                <input type="text" placeholder='Your Name:' className='user'/>
                <input type="email" placeholder='Your Email:'className='user'/>
                <input type="number" placeholder='Your Number:'className='user'/>
                <button type='submit' className='sub-but'>Submit</button>
                <textarea name="message" id="massage" rows={12} cols={85} className='msg'></textarea>
            </form>
            <img src={boy} alt="" className='form-boy'/>
        </div>
       </div>
    </div>
  )
}

export default Cont