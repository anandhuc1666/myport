import React from 'react'
import './Pro.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import logo from '../assets/ADlogo.png'
import pic1 from '../assets/Screenshot 2025-07-02 200332.png'
import pic2 from '../assets/Screenshot 2025-07-02 200511.png'
import pic3 from '../assets/Screenshot 2025-07-02 200614.png'
import pic4 from '../assets/Screenshot 2025-07-02 200655.png'
import pic5 from '../assets/Screenshot 2025-07-02 201007.png'

function Pro() {
    return (
        <>
            <div className="demo"> <h1>Project Works</h1></div>
            <div className='pro'>
                <div className="pro-box">
                    <div className="project-box">
                        <img src={pic1} alt="" className='pic' />
                        <p>Bags can be used to carry items such as personal belongings, groceries, tools, and other objects. They come in various shapes and sizes, often equipped with handles or straps for easier carrying.</p>
                    </div>
                    <div className="project-box">
                        <img src={pic2} alt="" className='pic' />
                        <p>Bags can be used to carry items such as personal belongings, groceries, tools, and other objects. They come in various shapes and sizes, often equipped with handles or straps for easier carrying.</p>
                    </div>
                    <div className="project-box">
                        <img src={pic3} alt="" className='pic' />
                        <p>Bags can be used to carry items such as personal belongings, groceries, tools, and other objects. They come in various shapes and sizes, often equipped with handles or straps for easier carrying.</p>
                    </div>
                    <div className="project-box">
                        <img src={pic4} alt="" className='pic' />
                        <p>Bags can be used to carry items such as personal belongings, groceries, tools, and other objects. They come in various shapes and sizes, often equipped with handles or straps for easier carrying.</p>
                    </div>
                    <div className="project-box">
                        <img src={pic5} alt="" className='pic' />
                        <p>Bags can be used to carry items such as personal belongings, groceries, tools, and other objects. They come in various shapes and sizes, often equipped with handles or straps for easier carrying.</p>
                    </div>
                </div>
            </div>
            <div className="end-box">
                <div className="end-box1">
                    <h2>I'm currently looking to join a <span>cross-function</span> team </h2>
                    <p>that values imroving perople's lives through accessible design</p>
                    <div className="end-box11">
                        <FaReact className='lag' />
                        <FaHtml5 className='lag' />
                        <FaCss3 className='lag' />
                        <SiTailwindcss className='lag' />
                        <TbBrandJavascript className='lag' />
                        <SiRedux className='lag' />
                        <SiCanva className='lag' />

                    </div>
                </div>
                <div className="end-box2">
                    <div className="cir1"></div>
                    <div className="cir2"></div>
                    <div className="cir3"></div>
                    <div className="cir4"></div>
                    <div className="cir5"></div>
                    <div className="cir6"></div>
                    <div className="cir7"></div>
                    <div className="cir8">
                        <img src={logo} alt="" style={{ width: 200 }} className='cir8-text' />
                        <FaReact className='lag1r' style={{marginTop:"-150px",marginLeft:"250px"}}/>
                        <FaHtml5 className='lag1h' style={{marginTop:"150px",marginLeft:"-200px"}}/>
                        <FaCss3 className='lag1c' style={{marginLeft:"-350px"}}/>
                        <SiTailwindcss className='lag1t' style={{marginTop:"-250px",marginLeft:"-100px"}}/>
                        <TbBrandJavascript className='lag1j' style={{marginTop:"20px",marginLeft:"200px"}}/>
                        <SiRedux className='lag1x' style={{marginTop:"-330px",marginLeft:"100px"}}/>
                        <SiCanva className='lag1ca'style={{marginTop:"300px",marginLeft:"150px"}} />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Pro