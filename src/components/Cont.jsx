import React from 'react'
// import './Cont.css' // REMOVED
import boy from '../assets/Boylogo.png'

function Cont() {
  // Common style for all input fields (Glassmorphism)
  const inputClasses = "w-full p-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-[#683ba7] focus:ring-1 focus:ring-[#683ba7] transition-all";

  return (
    <div className='w-full min-h-[62vh] bg-[#11071F] flex items-center justify-center py-10 px-4 md:px-12 box-border'>
       
       {/* Main Contact Box */}
       <div className="w-full max-w-[1200px] rounded-[30px] border-t-[3px] border-[#683ba7] text-center relative overflow-hidden"
            style={{
                // Replicating the exact radial gradient from your CSS
                background: 'radial-gradient(circle, #683ba7 0%, #482f6b 20%, #120b1d 30%, #0e0619 100%)'
            }}>
        
        <div className="p-8 md:p-12">
            <h1 className="text-white text-3xl md:text-5xl font-thin mb-8">Contact</h1>
            
            <form className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch">
                
                {/* Left Side: Inputs */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <input type="text" placeholder='Your Name:' className={inputClasses}/>
                    <input type="email" placeholder='Your Email:' className={inputClasses}/>
                    <input type="number" placeholder='Your Number:' className={inputClasses}/>
                </div>

                {/* Right Side: Message Area & Button */}
                <div className="flex flex-col gap-6 w-full md:w-1/2 relative">
                    <textarea 
                        name="message" 
                        placeholder="Write your message here..."
                        rows={8} 
                        className={`${inputClasses} h-full resize-none`}
                    ></textarea>
                    
                    {/* Submit Button (Desktop: aligned right, Mobile: centered) */}
                    <button type='submit' className='hidden md:block w-1/2 self-start py-3 rounded-full bg-[#683ba7] text-white font-semibold border border-white hover:bg-[#482f6b] transition-colors'>
                        Submit
                    </button>
                </div>

                {/* Mobile Submit Button (Visible only on mobile) */}
                <button type='submit' className='md:hidden w-1/2 mx-auto py-3 rounded-full bg-[#683ba7] text-white font-semibold border border-white hover:bg-[#482f6b] transition-colors'>
                    Submit
                </button>
            </form>
        </div>

        {/* Decorative Boy Image - Only visible on Mobile as per original design, but positioned better */}
        <div className="md:hidden flex justify-end pr-4 pb-4">
            <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full"
                 style={{ background: 'radial-gradient(circle, #eee 0%, #683ba7 50%, #120b1d 75%, #0e0619 100%)' }}>
                 <img src={boy} alt="Decorative" className='w-16 opacity-80'/>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Cont