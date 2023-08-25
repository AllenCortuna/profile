import React, { useState } from "react";

const ProjectCard = ({ image, title, desc }) => {
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
          <p className="text-white text-xs font-[600] mt-2 mr-2 drop-shadow-md">{title}</p>
        </div>

        {/* Back content */}
        <div className="card-back rounded-lg border border-zinc-100 flex flex-col p-3">
          <h1 className="text-white text-sm font-[600] ">{title}</h1>
          <p className="text-white text-xs font-[500] text-zinc-400 mt-2 ">{desc}</p>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
