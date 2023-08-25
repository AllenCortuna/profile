import React from "react";
import useHint from "./state/hint";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Baner = () => {
  const variant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  const setStat = useHint((state) => state.setStat);

  const scrollToElement = () => {
    var element = document.getElementById("f-skill");
    element.scrollIntoView({
      behavior: "smooth",
    });
    setStat("info", "List of Skills");
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const letters = [
    "A",
    "l",
    "l",
    "e",
    "n",
    " ",
    "C",
    "o",
    "r",
    "t",
    "u",
    "n",
    "a",
  ];

  return (
    <>
      <span className="flex flex-col justify-center content-top gap-5 mt-20 md:mt-40">
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className="flex flex-col p-4 w-auto text-center"
        >
          <span className="w-auto text-center">
            {letters.map((letter) => (
              <p
                className="mt-5 text-white font-[800] text-[3.5rem] md:text-[4rem] leading-[2.8rem] md:leading-[4rem] hover:text-lime-400 md:text-[4.6rem] hover:text-[4.4rem] md:hover:text-[5.2rem] letter transition-all ease-linear duration-400 hover:animate-bounce inline uppercase mx-[0.1rem] hover:skew-y-12 transform"

              // onClick={()=> setStat("info","Full Name")}
              >
                {letter}
              </p>
            ))}
          </span>
          <span className="flex flex-row mt-3 md:w-[22rem] w-[16rem] justify-center h-auto mx-auto md:pt-10 gap-4">
            <span className="flex flex-col w-5 h-auto">
              <span className="w-3 bg-white h-3 rounded-full"></span>
              <span className="w-1 h-36 bg-gradient-to-t from-transparent to-white opacity-90 -mt-2 ml-1"></span>

            </span>
            <p
              className="text-gray-200 font-[400] text-start space md:text-md text-sm "
              onMouseEnter={() => setStat("info", "Objective and Experience")}
            >
              Experienced front-end developer with specialization in React JS,
              adept at crafting diverse projects utilizing HTML, CSS, and
              JavaScript. Proficient in a range of frontend frameworks,
              including Tailwind CSS and SCSS/SASS. Demonstrates a comprehensive
              grasp of Git commands and GitHub workflows.
            </p>
          </span>
        </motion.div>

        <button
          className="mt-10 border border-2 rounded-full p-4 text-center bg-none text-white w-[10rem] mx-auto space font-[700] flex flex-row justify-center content-center gap-3 hover:bg-amber-300 hover:border-zinc-900 hover:text-black transition-all ease-linear duration-400 "
          onClick={scrollToElement}
        >
          skills
          <FaArrowAltCircleDown className="mt-1 animate-bounce text-md" />
        </button>
      </span>
    </>
  );
};

export default Baner;
