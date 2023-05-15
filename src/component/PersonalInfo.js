import React from "react";
import useHint from "./state/hint";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {BsCaretDownFill} from 'react-icons/bs';

const Baner = () => {

  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  
  const setStat = useHint((state) => state.setStat);

  const scrollToElement = () => {
    var element = document.getElementById("f-skill");
    element.scrollIntoView({behavior: "smooth"});
    setStat("info", "List of Skills")
     
  }


  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  const letters = ["A", "l", "l", "e", "n", " ", "C", "o", "r", "t", "u", "n", "a",];

  return (
    <>
      {/*banner*/}
      <span className="flex flex-col justify-center content-top gap-5 mt-40">
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className="flex flex-col p-4 w-auto text-center">
          <span className="w-auto text-center">
          {letters.map((letter) => (
            <p className="mt-5 text-white font-[800] text-[3.5rem] md:text-[4rem] leading-[2.8rem] md:leading-[4rem] hover:text-lime-400 md:text-[4.6rem] hover:text-[4.4rem] md:hover:text-[5.2rem] letter transition-all ease-linear duration-400 hover:animate-bounce inline uppercase mx-[0.1rem]"
                onClick={()=> setStat("info","Full Name")}

              >
              {letter}
            </p>
          ))}
          </span>

          <p className="text-gray-200 font-[400] w-[16rem] space md:text-md text-sm mt-3 md:w-[22rem] mx-auto pt-5 md:pt-10"
            onMouseEnter={() => setStat("info", "Basic info")}>
            Front end developer that is specialized in React Js, Prototype
            different project using HTML, CSS and JavaScript. Mastery of
            different frontend framework like Tailwind css and SCSS/SASS.
            Understanding of Git commands and Github.
          </p>
        </motion.div>

        <button className="mt-10 border border-2 rounded-full p-4 text-center bg-none text-white w-[10rem] mx-auto space font-[700] flex flex-row justify-center content-center gap-3 hover:bg-zinc-200 hover:text-black transition-all ease-linear duration-400"
          onClick={scrollToElement}> 
          skills
          
          <BsCaretDownFill className="mt-1"/>

        </button>
      </span>
    </>
  );
};

export default Baner;
