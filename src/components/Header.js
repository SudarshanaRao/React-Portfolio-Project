import React from 'react';
import profileImg from '../images/profile-img.png';  // Assuming the image is in src/images
import handIcon from '../images/hand-icon.png';  // Assuming the image is in src/images
import resume from '../Resume/Resume.pdf';  // Assuming the resume is in the resume folder outside src

function Header() {
  return (
    <div id="home" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 font-Ovo">
      <img src={profileImg} alt="avatar" className="rounded-3xl w-32" />
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm Sudarshana Rao 
        <img src={handIcon} alt="hand icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[62px]">
        Frontend Developer based in India.
      </h1>
      <p className="mx-auto max-w-2xl">
        I am a frontend developer from Andhra Pradesh, India with 4 years of experience
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2">
          Contact Me
          <i className="text-s fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href={resume} download className="px-10 py-3 border rounded-full border-gray-500 bg-white flex items-center gap-2">
          My Resume
          <i className="text-s fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
