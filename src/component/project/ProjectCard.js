import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle, FaLink } from "react-icons/fa";

const ProjectCard = ({ image, title, desc, git, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card h-[18rem] w-[18rem] ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        {/* Front content */}
        <div className="card-front rounded-xl bg-[#313235] flex flex-col justify-start p-2 content-start">
          <img
            src={image}
            alt="notfound"
            className="w-full h-[10rem] object-cover rounded-lg border-white border"
          />
          <p className="text-white text-sm space font-[700] mt-2 ml-2 drop-shadow-md ">
            {title}
          </p>
          <span className="h-[0.2rem] w-full mx-2 bg-gradient-to-l from-transparent to-lime-600 opacity-90"></span>

          <span className="pt-8 flex justify-start px-2 gap-4 ">
            {/* github */}
            <a
              className="border rounded-lg border-white p-2 hover:bg-amber-400 text-white hover:text-zinc-700 hover:border-amber-400 hover:shadow-lg transition-all duration-300 ease-linear"
              href={git}
              target="_blank"
              rel="noreferrer"
              title="open github project source code"
            >
              <BsGithub className="w-4 h-auto" />
            </a>
            {/* link  */}
            <a
              className="border rounded-lg border-white p-2 hover:bg-amber-400 text-white hover:text-zinc-700 hover:border-amber-400 hover:shadow-lg transition-all duration-300 ease-linear"
              href={link}
              target="_blank"
              rel="noreferrer"
              title="open site"
            >
              <FaLink className="w-4 h-auto" />
            </a>
            <button
              className="rounded-lg border-white p-2 hover:bg-amber-400 text-white hover:text-zinc-700 hover:border-amber-400 hover:shadow-lg ml-auto transition-all duration-300 ease-linear"
              title="more info"
            >
              <FaInfoCircle className="w-4 h-auto drop-shadow-lg" />
            </button>
          </span>
        </div>

        {/* Back content */}
        <div className="card-back rounded-lg border border-zinc-100 flex flex-col p-3 justify-start">
          <h1 className="text-white text-sm font-[800] ">{title}</h1>
          <p className="text-white text-xs font-[500] text-zinc-300 mt-2 space ">
            {desc}
          </p>
          <button className="space p-3 py-2 rounded-xl text-white text-center hover:font-[900] hover:text-amber-400 place-self-end mt-auto mb-0 underline transition-all duration-300 ease-linear">
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
