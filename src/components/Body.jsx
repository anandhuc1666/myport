import React from 'react'
// import './Body.css' // REMOVED
import boy from '../assets/Boylogo.png'
import arrow from '../assets/arrow.png'
import Typewriter from '../components/Typewriter'
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa"

function Body() {
    
    const socialLinks = [
      { icon: FaLinkedin, href: "https://www.linkedin.com/in/anandhu-chulliveetill-267956253/" },
      { icon: FaInstagramSquare, href: "" }, 
      { icon: FaGithubSquare, href: "https://github.com/anandhuc1666" },
    ];

    const desktopIconClasses = 'text-white text-5xl hover:text-[#683ba7] transition-colors cursor-pointer';
    const mobileIconClasses = 'text-white text-4xl hover:text-[#683ba7] transition-colors cursor-pointer';
    
    // Complex radial gradient for image container
    const radialGradientStyle = {
      background: 'radial-gradient(circle, rgba(238,238,238,0.1) 0%, #683ba7 50%, #120b1d 75%, #0e0619 100%)',
      boxShadow: '0 0 20px 5px rgba(104, 59, 167, 0.5)' 
    };
    
    // Mobile gradient style (slightly adjusted from desktop)
    const mobileGradientStyle = {
      ...radialGradientStyle, 
      boxShadow: '0 0 15px 3px rgba(104, 59, 167, 0.5)'
    };

    return (
        <div className='w-full min-h-[550px] md:h-[550px] bg-[#11071F] flex flex-col items-center justify-center font-sans'>
            
            {/* Main Content Container (Desktop: max-w-[1200px], Mobile: Full width) */}
            <div className="w-full max-w-[1200px] h-auto md:h-[500px] flex flex-col md:flex-row items-center md:items-start pt-10 md:pt-0 px-4">
                
                {/* Box 1 (Image/Visuals) - Hidden on mobile, visible on desktop */}
                <div className="hidden md:block w-full md:w-[400px] relative h-full">
                    {/* Arrow (position: absolute on desktop) */}
                    <img src={arrow} alt="arrow" className='absolute w-[100px] h-[150px] ml-[300px] mt-[45px]' />
                    
                    {/* Boy Image Container (Desktop) */}
                    <div className="h-[290px] mt-[150px] ml-[100px] flex items-center justify-center p-1 relative rounded-full"
                         style={radialGradientStyle}>
                        {/* Image size adjusted for desktop */}
                        <img src={boy} alt="Boy logo" className='w-[220px] h-auto ml-[50px]' /> 
                    </div>

                    {/* Social Media (Desktop) - position: absolute on desktop */}
                    <div className="absolute w-[500px] h-[100px] mt-[-150px] ml-[250px] flex items-center justify-evenly">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <Icon className={desktopIconClasses} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                
                {/* Box 2 (Text Content) - Full width on mobile, 800px on desktop */}
                <div className="w-full md:w-[800px] h-auto md:h-[500px] flex flex-col items-center md:items-start justify-start md:pt-0 px-5 md:px-0 mt-[-30px] md:mt-0">
                    
                    {/* Mobile Image/Socials Container (visible on mobile, hidden on desktop) */}
                    <div className="flex flex-col items-center md:hidden w-full mb-8">
                        {/* Mobile Image Container */}
                        <div className="w-[210px] p-4 mb-4 mt-20 md:mt-0 flex items-center justify-center rounded-full"
                            style={mobileGradientStyle}>
                            {/* Image size adjusted for mobile */}
                            <img src={boy} alt="Boy logo" className='w-[150px] h-auto' /> 
                        </div>
                        {/* Mobile Social Media */}
                        <div className="w-full max-w-xs flex items-center justify-around">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a key={`mob-${index}`} href={link.href} target="_blank" rel="noopener noreferrer">
                                        <Icon className={mobileIconClasses} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* mini-box1 (Hello, I Am...) */}
                    <div className="w-full h-auto text-white text-base md:text-2xl font-normal pt-0 md:pt-[70px] pl-0 md:pl-2 flex items-center justify-center md:justify-start flex-wrap">
                        Hello, I Am 
                        <Typewriter 
                            text=" Anandhu Chulliveetill" 
                            speed={100} 
                            className="text-[#683ba7] ml-2 font-light" 
                        />
                    </div>

                    {/* mini-box2 (I'm a Software Developer) */}
                    <div className="w-full h-auto flex flex-col items-center md:items-start pt-10 md:pt-24 px-0 md:pl-12">
                        <h1 className="text-white text-3xl md:text-5xl font-extralight mb-4 md:mb-0">
                            I'm a Software Developer
                        </h1>
                        <p className="text-[#7f5ab1] text-xs md:text-base mt-4 md:mt-2">
                            <Typewriter 
                                text='"I build clean, interactive web apps.😜"' 
                                speed={80} 
                            />
                        </p>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
            <div className="boy-imgs">
                <img src={boy} alt="" className='boy-logos' />
            </div>
            <div className="socialMd">
                <a href="https://www.linkedin.com/in/anandhu-chulliveetill-267956253/ "><FaLinkedin className='s-Media' /></a>
                <a href=""><FaInstagramSquare className='s-Media' /></a>
                <a href="https://github.com/anandhuc1666"><FaGithubSquare className='s-Media' /></a>  
            </div>

>>>>>>> 864f43b94157bf3d9b87bcf5ae6c46eeb73d7b53
        </div>
    )
}

export default Body