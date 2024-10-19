import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import work1 from '../images/work-1.png';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.png';
import work4 from '../images/work-4.png';
import work5 from '../images/work-5.png'; // Additional project image
import work6 from '../images/work-6.png'; // Additional project image
import rightArrow from '../images/right-arrow-bold.png';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Show 4 projects initially

  const projectList = [
    {
      title: 'React Project',
      description: 'Portfolio Website',
      imageUrl: work1,
      projectLink: 'https://react-portfolio.dharsh.live/',
    },
    {
      title: 'JavaScript Project',
      description: 'Guessing Game',
      imageUrl: work2,
      projectLink: 'https://pandu07.ccbp.tech/',
    },
    {
      title: 'Tailwind CSS',
      description: 'Netflix Clone',
      imageUrl: work3,
      projectLink: 'https://dharshnetflix.ccbp.tech/',
    },
    {
      title: 'React Project',
      description: 'Todo Application',
      imageUrl: work4,
      projectLink: 'https://react-todo.dharsh.live/',
    },
    {
      title: 'Frontend Project',
      description: 'Food Munch',
      imageUrl: work5,
      projectLink: 'https://urspandu.ccbp.tech/',
    },
    {
      title: 'JavaScript Project',
      description: 'Addition Game',
      imageUrl: work6,
      projectLink: 'https://gamingjs.ccbp.tech/',
    },
    {
      title: 'React Meme Generator',
      description: 'Meme Generator',
      imageUrl: work7,
      projectLink: 'https://dharshmeme.ccbp.tech/',
    },
  ];

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 2); // Increase the count of visible projects
  };

  return (
    <div id="projects" className="w-full px-[12%] pt-20 py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My Latest Work</h4>
      <h2 className="text-center text-5xl">Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
        {projectList.slice(0, visibleProjects).map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>

      {visibleProjects < projectList.length && ( // Show button only if there are more projects
        <button
          onClick={handleShowMore}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
        >
          Show More
          <img src={rightArrow} alt="right arrow icon" className="w-4" />
        </button>
      )}
    </div>
  );
};

export default Projects;
