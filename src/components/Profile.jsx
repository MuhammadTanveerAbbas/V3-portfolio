import profile from "../assets/Profile.jpeg";
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function Profile() {
  const configData = getConfigData();
  const isAvailable = configData.status === "on";

  const workStatusTextClass = `
    ${
      isAvailable
        ? "bg-[#d0fadf] text-[#109d5c]"
        : "bg-[#ff9d9d] text-[#f74d4d]"
    }
    flex items-center gap-1 text-[9px] sm:text-[10px] md:text-sm
    font-semibold uppercase rounded-full
    px-2 py-0.5 animate-fade-in
  `.trim();

  const workStatusDotClass = `
    relative w-2 h-2 rounded-full
    ${isAvailable ? "bg-[#109d5c]" : "bg-[#f74d4d]"}
  `.trim();

  const pingCircleClass = `
    absolute inset-0 rounded-full border border-[#109d5c]
    animate-ping-slower
  `.trim();

  const workStatusText = isAvailable ? "available for work" : "busy";

  return (
    <>
      <style>{`
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping-slower {
          animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="flex items-center justify-between px-3 sm:px-5 pt-4 sm:pt-5">
        <div className="text-sm sm:text-base font-medium flex items-center gap-x-1.5 sm:gap-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full" />
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className={workStatusDotClass}>
            {isAvailable && <span className={pingCircleClass}></span>}
          </div>
          <span className="block whitespace-nowrap">{workStatusText}</span>
        </div>
      </div>

      <div className="px-3 sm:px-5 pb-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between pt-1.5 sm:pt-2 md:pt-3">
        <div className="flex flex-col gap-y-1 md:gap-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left tracking-tight">
            I&rsquo;m {configData.name}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-snug max-w-xl mx-auto md:mx-0">
            {configData.desc}
          </p>

          <div className="flex flex-wrap gap-3 pt-4 sm:pt-5 justify-center md:justify-start">
            <a
              href={configData.hireMeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-x-1 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-black border border-black rounded-lg relative overflow-hidden shadow-md before:absolute before:top-0 before:right-0 before:h-10 before:w-5 before:translate-x-10 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-36"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
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

        <div className="rounded-full p-1 flex items-center justify-center mb-4 sm:mb-5 md:mb-7">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-[110%] h-[100%] rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
}
