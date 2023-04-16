import React from "react";
import useHint from "./state/hint";
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

const Baner = () => {
  const setStat = useHint((state) => state.setStat);
  return (
    <>
      {/*banner*/}
      <span className="flex justify-center content-top gap-5 ">
        <div className=" p-4 w-[20rem] h-[30rem] border-box rounded-tr-lg rounded-tl-lg rounded-bl-3xl rounded-br-3xl text-center">
          {letters.map((letter) => (
            <p className="mt-5 text-white text-xl font-[800] text-[2.8rem] leading-[2rem] hover:text-lime-400 hover:text-[3.2rem] letter transition-all ease-linear duration-400 hover:animate-bounce inline uppercase mx-[.1rem]">
              {letter}
            </p>
          ))}

          <p className="text-gray-200 font-[500] text-sm  mt-3 max-w-[20rem] quick"
    onMouseEnter={()=>setStat("info","Basic info")}>
            Front end developer that is specialized in React Js, Prototype
            different project using HTML, CSS and JavaScript. Mastery of
            different frontend framework like Tailwind css and SCSS/SASS.
            Understanding of Git commands and Github.
          </p>
        </div>
      </span>
    </>
  );
};

export default Baner;
