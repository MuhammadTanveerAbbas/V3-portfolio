import { useState } from "react";

const projects = [
  {
    "project-image-url": "/icon-1.png",
    "project-name": "Aurielle Jewellary",
    "project-desc": "GSAP + React + Tailwind CSS ",
    link: "https://aurielle-jewellery.vercel.app/",
  },
  {
    "project-image-url": "/icon-2.png",
    "project-name": "Splyt Drinks",
    "project-desc": "GSAP + React + Tailwind CSS",
    link: "https://splyt-awwwards-website.vercel.app/",
  },
  {
    "project-image-url": "/icon-3.png",
    "project-name": "Opsync MVP",
    "project-desc": "Next js + React js + Tailwind CSS",
    link: "https://opsync-mvp.vercel.app/",
  },
  {
    "project-image-url": "/icon-4.png",
    "project-name": "Blogy Pages",
    "project-desc": "HTML + CSS + Javascript + ES6",
    link: "https://blogy-pages.netlify.app/",
  },
];

export default function Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-2">
      <div className="flex flex-col bg-white rounded-lg px-5 py-5 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Projects
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="drop-shadow-md bg-[#f3f4f6] rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-gray-200 hover:border-gray-300"
              >
                <div className="rounded-full overflow-hidden items-center justify-center border border-gray-200 hidden md:block">
                  <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project["project-image-url"]}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium text-lg text-gray-900">
                    {project["project-name"]}
                  </h1>
                  <p className="text-gray-500 text-md">
                    {project["project-desc"]}
                  </p>
                </div>
                <div className="ml-auto hidden md:inline-block bg-[#f3f4f6] rounded-full p-1">
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
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
