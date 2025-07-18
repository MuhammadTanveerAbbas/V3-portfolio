import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();

  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>

      <div className="px-7 py-7 flex flex-col md:flex-row md:items-center md:justify-between pt-3 gap-8">
        <div className="flex flex-col gap-y-4 max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl font-semibold text-center md:text-left tracking-tighter">
            It&rsquo;s me {configData.name}
          </h1>
          <p className="text-lg text-gray-500 text-center md:text-left font-normal tracking-tight">
            {configData.aboutDesc}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          Let&rsquo;s work together.
        </h1>
        <p className="text-md font-normal text-gray-500 text-center mt-2">
          Crafting engaging user experiences
        </p>
      </div>

      <div className="flex md:flex-row items-center justify-center py-8 px-4 max-w-3xl mx-auto">
        <div className="flex flex-col gap-y-2 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-center md:text-left">
            <a
              href={configData.hireMeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="relative overflow-hidden border border-black bg-black text-white shadow-2xl font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center gap-x-1 hover:before:-translate-x-40 before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                Hire Me
              </button>
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}
