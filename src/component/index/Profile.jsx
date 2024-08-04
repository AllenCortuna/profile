import React, { useEffect, useRef } from "react";
import useHint from "../state/hint";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";

const Baner = () => {
  const bioEl = useRef(null);
  const nameEl = useRef(null);

  useEffect(() => {
    const bioTyped = new Typed(bioEl.current, {
      strings: [
        "<i>Full Stack Web Developer with specialization in <b> React JS</b>, adept at crafting diverse projects utilizing <b> HTML, CSS,</b> and <b> JavaScript</b>. Proficient in a range of frontend frameworks, including <b>Tailwind CSS</b> and <b>SCSS/SASS</b>. Demonstrates a comprehensive grasp of <b>Git</b> commands and <b>GitHub </b> workflows. </i>",
      ],
      typeSpeed: 10,
    });

    const nameTyped = new Typed(nameEl.current, {
      strings: ["Allen Cortuna"],
      typeSpeed: 100,
      startDelay: 500,
      showCursor: false,
    });

    return () => {
      bioTyped.destroy();
      nameTyped.destroy();
    };
  }, []);

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

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <span className="flex flex-col justify-center content-top gap-10 mt-14 ">
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className="flex flex-col p-4 w-auto text-center justify-center"
        >
          <span className="text-center my-auto ">
            <p className="mt-5 font-[800] text-[3.5rem] md:text-[4rem] lg:text-[6rem] leading-[3rem] md:leading-[4rem] text-lime-400 letter transition-all ease-linear duration-400 hover:animate-bounce inline capitalized mx-[0.1rem] hover:skew-y-12 transform">
              <span ref={nameEl}></span>
            </p>
          </span>
          <span className="w-auto flex flex-row gap-5 mt-5">
            <span className="flex flex-row md:w-[26rem] w-[15rem] justify-center h-auto mx-auto gap-4">
              {/* line fade art */}
              <span className="flex flex-col w-5 h-auto">
                <span className="w-3 bg-white h-3 rounded-full"></span>
                <span className="w-1 h-full bg-gradient-to-t from-transparent to-white opacity-90 -mt-2 ml-1"></span>
              </span>
              <p
                className="text-gray-200 font-[400] text-left space text-sm md:text-md lg:text-lg "
                onMouseEnter={() => setStat("info", "Objective and Experience")}
              >
                <span ref={bioEl} />
              </p>
            </span>
          </span>
        </motion.div>
      </span>
    </>
  );
};

export default Baner;