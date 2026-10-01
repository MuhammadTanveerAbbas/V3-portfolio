import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import configData from "../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  return (
    <>
      <div className="px-2 pb-2">
        <div className="flex items-center justify-between px-7 pt-5 pb-5 bg-gray-100 rounded-lg">
          <div className="font-medium text-sm tracking-tight text-gray-500 uppercase flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Contacts
          </div>
          <div className="flex gap-x-1">
            {socialLinks.map((socialLink, index) => {
              const iconMap = {
                FaLinkedinIn,
                FaGithub,
                FaXTwitter,
              };
              const IconComponent = iconMap[socialLink.icon];

              return (
                <a
                  key={index}
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  {<IconComponent size={20} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
