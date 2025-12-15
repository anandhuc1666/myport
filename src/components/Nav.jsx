import React, { useState } from 'react';
// import './Nav.css' // REMOVED
import logo from '../assets/ADlogo.png';
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5"; // Added a close icon for the mobile menu

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Projects", "Contact"];
  const iconClasses = 'text-white hover:text-[#683ba7] transition-colors cursor-pointer';

  return (
    // Mobile-first: h-50px, bg-[#11071F], px-4. Desktop (md): h-100px, bg-[#1A0A2E], px-8.
    <div className="w-full h-[50px] bg-[#11071F] text-white flex justify-between items-center px-4 md:h-[100px] md:px-8 md:bg-[#1A0A2E] z-50 sticky top-0">
      
      {/* Logo: w-9 on mobile, w-20 on desktop */}
      <div className="nav-logo">
        <img src={logo} alt="logo" className='w-9 md:w-20' /> 
      </div>
      
      {/* Desktop Navigation List (Hidden on mobile) */}
      <ul className="hidden md:flex list-none w-auto justify-around text-lg space-x-10 mr-20">
        {navItems.map((item) => (
          <li key={item} className={iconClasses}>{item}</li>
        ))}
      </ul>
      
      {/* Mobile Menu Button (Hidden on desktop) */}
      <div className="md:hidden">
        {isOpen ? (
          <IoClose className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <HiBars3 className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#11071F] z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-4 pt-6">
           <IoClose className="text-4xl text-white cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
        <ul className="flex flex-col items-center pt-10 space-y-8 text-xl">
          {navItems.map((item) => (
            <li key={item} className='text-white hover:text-[#683ba7] transition-colors cursor-pointer' onClick={() => setIsOpen(false)}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Nav;