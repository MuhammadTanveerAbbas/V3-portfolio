import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs } from "react-icons/si";
import { HiFolderOpen, HiClock, HiDeviceMobile } from "react-icons/hi";

const TECH = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
];

const STATS = [
  { num: "20+", label: "Projects", Icon: HiFolderOpen },
  { num: "3+", label: "Years exp.", Icon: HiClock },
  { num: "100%", label: "Responsive", Icon: HiDeviceMobile },
];

export default function About() {
  const configData = getConfigData();

  return (
    <>
      <div className="px-4 sm:px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>

      <div className="px-4 sm:px-7 pb-6 flex flex-col items-center pt-3 gap-5">

        {/* Name + desc */}
        <div className="flex flex-col gap-y-3 w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            It&rsquo;s me {configData.name}
          </h1>
          <p className="text-base text-gray-500 font-normal tracking-tight leading-relaxed">
            Developer focused on building sleek, high-performance web experiences. Responsive, scalable, and visually sharp.
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {TECH.map(({ label, Icon, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors duration-150"
            >
              <Icon size={11} color={color} />
              {label}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 w-full border border-gray-100 rounded-xl overflow-hidden divide-x divide-gray-100">
          {STATS.map(({ num, label, Icon }) => (
            <div key={label} className="flex items-center gap-2.5 px-3 py-3">
              <div className="p-2 rounded-xl bg-black text-white flex-shrink-0">
                <Icon size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 tracking-tight leading-none">{num}</span>
                <span className="text-[10px] text-gray-400 mt-0.5 leading-none">{label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-col items-center justify-center pt-5 pb-3 px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          Let&rsquo;s work together.
        </h1>
        <p className="text-sm text-gray-500 mt-1.5">
          Crafting engaging user experiences
        </p>
      </div>

      <div className="flex items-center justify-center py-4 px-4 gap-4">
        <a href={configData.hireMeLink} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-gray-900 transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.818a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.845-.143z" clipRule="evenodd" />
            </svg>
            Hire Me
          </button>
        </a>
        <CopyEmailButton />
      </div>
    </>
  );
}
