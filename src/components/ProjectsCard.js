import React from 'react';
import icon from '../images/send-icon.png';

const ProjectsCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div
      className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 cursor-pointer">
          <div>
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
          <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <img src={icon} alt="send icon" className="w-5" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCard;
