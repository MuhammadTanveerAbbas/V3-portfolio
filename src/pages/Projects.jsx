import { useState } from "react";

const PROJECTS = [
  {
    imageUrl: "/icon-1.jpg",
    name: "Layers Editor",
    description: "GSAP + Next JS + Tailwind CSS",
    link: "https://layers-editor-landing-page.vercel.app/",
  },
  {
    imageUrl: "/icon-2.jpg",
    name: "Summarizer AI",
    description: "React + Typescript + Tailwind CSS",
    link: "https://ai-summarizer-gpt.vercel.app/",
  },
  {
    imageUrl: "/icon-3.png",
    name: "Opsync MVP",
    description: "Next js + React js + Tailwind CSS",
    link: "https://opsync-mvp.vercel.app/",
  },
  {
    imageUrl: "/icon-4.png",
    name: "Blogy Pages",
    description: "HTML + CSS + Javascript + ES6",
    link: "https://blogy-pages.netlify.app/",
  },
];

const createArrowIcon = (isHovered) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={isHovered ? "#6B7280" : "#D1D5DB"}
    className="w-6 h-6 transition-colors duration-150"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const ProjectImage = ({ imageUrl, name }) => (
  <div className="rounded-full overflow-hidden items-center justify-center border border-gray-200 hidden md:block">
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
    </div>
  </div>
);

const ProjectContent = ({ name, description }) => (
  <div className="flex flex-col justify-center">
    <h1 className="font-medium text-lg text-gray-900">{name}</h1>
    <p className="text-gray-500 text-md">{description}</p>
  </div>
);

const ProjectArrow = ({ isHovered }) => (
  <div className="ml-auto hidden md:inline-block bg-[#f3f4f6] rounded-full p-1">
    {createArrowIcon(isHovered)}
  </div>
);

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="drop-shadow-md bg-[#f3f4f6] rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
  >
    <ProjectImage imageUrl={project.imageUrl} name={project.name} />
    <ProjectContent
      name={project.name}
      description={project.description}
    />{" "}
  </a>
);

const SectionHeader = () => (
  <div className="flex items-center justify-between mb-5">
    <div className="font-medium text-lg flex items-center gap-x-2">
      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      Projects
    </div>
  </div>
);

export default function Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="px-2">
      <div className="flex flex-col bg-white rounded-lg px-5 py-5 max-w-6xl mx-auto">
        <SectionHeader />
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
