import React from 'react';
import { Link } from 'react-scroll';
import headerBg from '../images/header-bg-color.png';  
import menuIcon from '../images/menu-black.png';

function Navbar() {
  return (
    <>
      {/* Background image div */}
      <div className="top-0 right-0 fixed -z-10 w-11/12 translate-y-[-80%]">
        <img src={headerBg} alt="Background Color" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="px-5 lg:px-8 py-4 xl:px-[8%] w-full fixed z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Sudarshana Rao</Link>
          
          {/* Menu list */}
          <div id="listItems" className="hidden md:flex gap-4 lg:gap-6 rounded-full py-2 px-8 shadow-sm bg-opacity-50 font-Ovo cursor-pointer">
          <Link to="home" smooth={true} duration={500} className="">Home</Link>
            <Link to="about" smooth={true} duration={500} className="">About Me</Link>
            <Link to="projects" smooth={true} duration={500} className="">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="">Contact Me</Link>
          </div>

          {/* Contact button and mobile menu */}
          <div>
            <Link to="contact" smooth={true} duration={500} className="text-x hidden lg:inline border border-gray-500 rounded-full px-6 py-2 font-Ovo">
              Contact <i className="text-s fa-solid fa-arrow-up-right-from-square"></i>
            </Link>

            {/* Mobile menu button */}
            <button className="p-5 block md:hidden ml-3">
              <img src={menuIcon} alt="Menu" className="w-6" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
