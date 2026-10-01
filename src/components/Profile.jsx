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
    flex items-center gap-1 text-[10px] font-semibold uppercase rounded-full
    px-2.5 py-1 animate-fade-in
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
        <div className="text-sm sm:text-base font-medium tracking-tight flex items-center gap-x-1.5 sm:gap-x-2">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left tracking-tighter leading-tight">
            I&rsquo;m {configData.name}
          </h1>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 tracking-tight">
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
                className="inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-gray-900 transition-colors duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223 4.52 4.52 0 001.957-.405z" clipRule="evenodd" />
                </svg>
                Let&rsquo;s Talk
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
