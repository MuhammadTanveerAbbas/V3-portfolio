import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { useNavigate } from "react-router-dom";

const ProjectImage = ({ imageUrl, projectName }) => (
  <div className="rounded-full overflow-hidden items-center justify-center border border-gray-100 group-hover:border-gray-200 transition-colors duration-200 hidden md:flex md:items-center md:justify-center">
    <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={projectName}
      />
    </div>
  </div>
);

const ProjectContent = ({ name, description }) => (
  <div className="flex flex-col justify-center flex-1">
    <h1 className="font-medium text-base">{name}</h1>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const ProjectCard = ({ project }) => (
  <a
    className="group bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 gap-x-3 md:gap-x-4 flex flex-row items-center hover:-translate-y-0.5 duration-200 transition-all ease-in-out border border-gray-100 hover:border-gray-200 hover:shadow-[0_2px_8px_-1px_rgba(0,0,0,0.05)]"
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ProjectImage
      imageUrl={project["project-image-url"]}
      projectName={project["project-name"]}
    />
    <ProjectContent
      name={project["project-name"]}
      description={project["project-desc"]}
    />
  </a>
);

const SectionHeader = ({ onViewAll }) => (
  <div className="flex items-center justify-between mb-5">
    <div className="font-medium text-lg flex items-center gap-x-2">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      Projects
    </div>
    <button
      type="button"
      onClick={onViewAll}
      className="text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
    >
      View All
    </button>
  </div>
);

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/projects");
  };

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5">
        <SectionHeader onViewAll={handleViewAll} />
        <div className="flex flex-col gap-y-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
