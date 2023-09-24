import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectCard = ({ image, title, desc, git, link }) => {
  // animation framer motion
  const variant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 1,
      x: 100
    },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  // card flip state
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
      className={`flex card h-[19rem] w-[20rem] ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        {/* Front content */}
        <div className="card-front rounded-xl bg-[#313235] flex flex-col justify-start p-2 content-start">
          <img
            src={image}
            alt="notfound"
            className="w-full h-[12rem] object-cover rounded-lg border-white border"
          />
          <p className="text-white text-sm space font-[700] mt-2 ml-2 drop-shadow-md ">
            {title}
          </p>
          <span className="h-[0.2rem] w-full mx-2 bg-gradient-to-l from-transparent to-lime-600 opacity-90"></span>

          <span className="mb-4 mt-auto flex justify-start px-2 gap-4 ">
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
          <h1 className="text-white text-lg font-[800] space ">{title}</h1>
          <p className="text-white text-sm font-[500] text-zinc-300 mt-2 space ">
            {desc}
          </p>
          <button className="space p-3 py-2 rounded-xl text-white text-center hover:font-[900] hover:text-amber-400 place-self-end mt-auto mb-0 underline transition-all duration-300 ease-linear">
            back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
