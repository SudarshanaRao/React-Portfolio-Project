import React from "react";
import meImage from '../images/Me.jpg';
import circularText from '../images/circular-text.png';
import emoji from '../images/Emoji-boy.svg';
import codeIcon from '../images/code-icon.png';
import eduIcon from '../images/edu-icon.png';
import projectIcon from '../images/project-icon.png';
import vscode from '../images/vscode.png';
import firebase from '../images/firebase.png';
import mongodb from '../images/mongodb.png';
import figma from '../images/figma.png';
import git from '../images/git.png';

const AboutMe = () => {
  return (
    <div id="about" className="w-full pt-20 px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About Me</h2>
      
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        
        <div className="max-w-max mx-auto relative">
          <img src={meImage} alt="user" className="w-48 sm:w-64 rounded-3xl max-w-none" />
          
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-start justify-center">
            <img src={circularText} className="w-full" alt="circular text" />
            <img src={emoji} className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="emoji" />
          </div>
        </div>
        
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Hello! I'm Sudarshana Rao Gollamandala, a dedicated full-stack developer passionate about crafting innovative web solutions and making technology accessible and enjoyable for everyone.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={codeIcon} alt="code icon" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, JavaScript, React Js, Node Js, Express Js</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={eduIcon} alt="education icon" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">Bachelor of Computer Applications</p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={projectIcon} alt="project icon" className="w-7 mt-3" />
              <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
              <p className="text-gray-600 text-sm">Built more than 5 Projects</p>
            </li>
          </ul>
          
          <h4 className="my-6 text-gray-700">Tools I use</h4>
          
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vscode} alt="VSCode" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={firebase} alt="Firebase" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={mongodb} alt="MongoDB" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={figma} alt="Figma" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={git} alt="Git" className="w-5 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
