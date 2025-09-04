import React from 'react'
import './Body.css'
import boy from '../assets/Boylogo.png'
import arrow from '../assets/arrow.png'
import Typewriter from '../components/Typewriter'

function Body() {
    return (
        <div className='body'>
            <div className="body-container">
                <div className="box1">
                    <img src={arrow} alt="" className='arrow' />
                    <div className="boy-img">
                        <img src={boy} alt="" className='boy-logo' />
                    </div>
                </div>

                <div className="box2">
                    <div className="mini-box1">Hello, I Am <Typewriter text=" Anandhu Chulliveetill" speed={100} /></div>
                    <div className="mini-box2">
                        <h1>I'm a Software Developer</h1>
                        <p> <Typewriter text='"I build clean, interactive web apps.😜"' speed={80} /></p>
                    </div>
                </div>
            </div>
            <div className="boy-imgs">
                <img src={boy} alt="" className='boy-logos' />
            </div>

        </div>
    )
}

export default Body