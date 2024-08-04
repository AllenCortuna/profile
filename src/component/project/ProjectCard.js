import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle, FaLink, FaLocationArrow } from "react-icons/fa";

const ProjectCard = ({ image, title, desc, git, link }) => {
  // card flip state
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const linkStl =
    "rounded-md p-3 pl-4 pr-5 hover:bg-amber-400 text-gray-400 hover:text-zinc-700 hover:border-amber-400 hover:shadow-lg transition-all duration-300 ease-linear text-xs space underline flex flex-row gap-2 font-bold bg-gray-700";

  return (
    <div
      className={`flex card h-[20rem] w-[20rem] ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        {/* Front content */}
        <div className="card-front rounded-2xl bg-gray-800 border border-gray-700 flex flex-col justify-start content-start">
          <img
            src={image}
            alt="notfound"
            className="w-full h-[12rem] object-cover rounded-tl-2xl rounded-tr-2xl"
          />
          <p className="text-white space font-[700] mt-2 ml-2 letter drop-shadow-md ">
            {title}
          </p>

          <span className="mb-4 mt-3 flex flex-row justify-start px-2 gap-2 ">
            <a
              className={linkStl}
              href={git}
              target="_blank"
              rel="noreferrer"
              title="open github project source code"
            >
              <BsGithub className="w-4 h-auto" />
              Github
            </a>
            {link && (
              <a
                className={linkStl}
                href={link}
                target="_blank"
                rel="noreferrer"
                title="open site"
              >
                <FaLink className="w-4 h-auto" />
                Visit
              </a>
            )}

            <button className={linkStl} title="more info">
              <FaInfoCircle className="w-4 h-auto drop-shadow-lg" />
              Info
            </button>
          </span>
        </div>

        {/* Back content */}
        <div className="card-back rounded-lg border border-zinc-100 flex flex-col p-3 justify-start">
          <h1 className="text-white text-lg font-[800] space ">{title}</h1>
          <p className="text-white text-sm font-[500] mt-2 space ">
            {desc}
          </p>
          <button
            className={`place-self-end mt-auto mb-0 ${linkStl}`}
          >
            <FaLocationArrow className="rotate-[220deg] mt-1" />
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
