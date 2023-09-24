import React from "react";
import { RiHomeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { HiFolderOpen } from "react-icons/hi";
import useHint from "../state/hint";

const Intro = () => {
  const setStat = useHint((state) => state.setStat);

  const scrollToElement = () => {
    var element = document.getElementById("f-skill");
    element.scrollIntoView({
      behavior: "smooth",
    });
    setStat("info", "List of Skills");
  };
  return (
    <div>
      <span className="flex flex-row gap-10 mx-auto ">
        <Link
          className="flex flex-row gap-1 text-md border border-lime-300 p-2 px-4 rounded-md text-lime-300 font-[700] mx-auto my-4 hover:text-black hover:bg-amber-300 hover:border-amber-300"
          to={"/project"}
          onClick={() => setStat("project", "List of projects")}
        >
          <HiFolderOpen className="mt-1" />
          project
        </Link>

        <Link
          className="flex flex-row gap-1 text-md border border-lime-300 p-2 px-4 rounded-md text-lime-300 font-[700] mx-auto my-4 hover:text-black hover:bg-amber-300 hover:border-amber-300"
          to={"/contact"}
          onClick={() => setStat("contact", "Send inquires")}
        >
          <MdPermContactCalendar className="mt-1" />
          contact
        </Link>
      </span>

      <button
        className="mt-5 border border-2 rounded-full p-4 px-6 text-center bg-none text-white mx-auto space font-[700] flex flex-row justify-center content-center gap-1 hover:bg-amber-300 hover:border-zinc-900 hover:text-black transition-all ease-linear duration-400 animate-bounce"
        onClick={scrollToElement}
      >
        <RiHomeFill className="mt-1 rotate-[180deg]" />
        <p className="">skills</p>
      </button>
    </div>
  );
};

export default Intro;
