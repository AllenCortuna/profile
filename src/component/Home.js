import React from "react";
import PersonalInfo  from './PersonalInfo'
import Skills from "./Skill";
import useHint from "./state/hint";
import { FaArrowAltCircleUp } from "react-icons/fa";

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
    <div className="p-4">
      <div className=" mt-10 grid grid-cols-1 gap-y-10 justify-items-center">
        <PersonalInfo/>
        <Skills/>
        <button
          className="mt-20 border rounded-full p-3 text-center bg-none text-white w-[10rem] mx-auto space font-[700] text-xs flex flex-row justify-center content-center gap-3 hover:bg-amber-300 hover:border-amber-300 hover:text-black transition-all ease-linear duration-300 animate-bounce"
          
          onClick={scrollToTop}
        >
          <p className="">
          scroll to top</p>
          <FaArrowAltCircleUp className="mt-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Home;
