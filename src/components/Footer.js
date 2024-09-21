import React from 'react';
import mailIcon from '../images/mail_icon.png';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="text-center">
        <a href="#Home" className="text-xl font-bold w-36 mx-auto mb-2">
          Sudarshana Rao
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src={mailIcon} alt="Mail icon" className="w-6" />
          sudarshan.gollamandala@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2024 Sudarshana Rao. All rights reserved.</p>
        <ul className="flex flex-col sm:flex-row gap-4">
          <li>
            <a href="https://www.instagram.com/dharshh_650/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/SudarshanaRao" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sudarshanarao/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
