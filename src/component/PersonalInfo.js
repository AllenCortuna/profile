import React from "react";
import useHint from "./state/hint";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Baner = () => {


  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  const setStat = useHint((state) => state.setStat);

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
      <span className="flex justify-center content-top gap-5 mt-40">
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className=" p-4 w-auto border-box rounded-tr-lg rounded-tl-lg rounded-bl-3xl rounded-br-3xl text-center">
          {letters.map((letter) => (
            <p className="mt-5 text-white text-xl font-[800] text-[3.2rem] md:text-[4rem] leading-[2rem] md:leading-[4rem] hover:text-lime-400 md:text-[4.6rem] hover:text-[3.8rem] md:hover:text-[5.2rem] letter transition-all ease-linear duration-400 hover:animate-bounce inline uppercase mx-[.1rem]">
              {letter}
            </p>
          ))}

          <p className="text-gray-200 font-[500] md:text-lg text-md mt-3 max-w-[30rem] quick mx-auto pt-5 md:pt-10"
            onMouseEnter={() => setStat("info", "Basic info")}>
            Front end developer that is specialized in React Js, Prototype
            different project using HTML, CSS and JavaScript. Mastery of
            different frontend framework like Tailwind css and SCSS/SASS.
            Understanding of Git commands and Github.
          </p>
        </motion.div>
      </span>
    </>
  );
};

export default Baner;
