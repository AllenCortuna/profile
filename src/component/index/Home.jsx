import React from "react";
import Profile  from './Profile'
import Intro  from './Intro'
import Skills from "./Skill";
import useHint from "../state/hint";
import { RiHomeFill } from "react-icons/ri";
import Educ from "./Educ";

const Home = () => {

  const setStat = useHint((state) => state.setStat);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setStat("home", "Welcome!");
  }
  
  return (
    <div className="">
      <div className="my-10 grid grid-cols-1 justify-items-center gap-5">
        <span className="flex flex-col justify-items-center md:min-h-screen">
        <Profile/>
        <Intro/>
        </span>
        <Skills/>
        <Educ/>
        <button
          className=" border rounded-md p-3 px-5 text-center bg-none text-white mx-auto space font-[700] text-sm flex flex-row justify-center content-center gap-1 hover:bg-amber-300 hover:border-amber-300 hover:text-black transition-all ease-linear duration-300"
          
          onClick={scrollToTop}
        >
          <RiHomeFill className="mt-1"/>
          <p className="mr-2">
          back</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
