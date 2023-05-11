import React from "react";
import autoAnimate from "@formkit/auto-animate";
import Hint from "./Hint";
import useHint from "../state/hint";
import { Link } from "react-router-dom";

const Navbar = () => {
  const setStat = useHint((state) => state.setStat);
  const dom = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);
  const isSmallScreen = window.innerWidth <= 440;
  const content = [
    { name: "home", to: "", desc: "Welcome " },
    { name: "project", to: "project", desc: "List of Project" },
    { name: "contact", to: "contact", desc: "Contact Me " },
  ];

  const handleClick = (stat, hint) => {
    setStat(stat, hint);
  };

  // styling for the navbar items
  // WARN: navlink is in index.css
  const navlink =
    "text-zinc-100 text-sm font-semibold hover:text-lime-400 font-normal hover:font-[900] transition-all ease-linear lowercase hover:uppercase duration-300";
  // content for the navbar
  const nav = (
    <nav
      className={` my-auto grid gap-2 h-0 p-4 h-full ${!isSmallScreen && "grid-cols-4 p-5 py-1"
        }`}
    >
      {content.map((a) => (
        <Link
          to={`/${a.to}`}
          className="flex justify-center content-center w-full md:w-20"
          onClick={() => handleClick(a.name, a.desc)}
        // onMouseEnter={() => handleClick("info", ("click to see "+ a.name))}
        >
          <p className={navlink}>{a.name}</p>
        </Link>
      ))}
    </nav>
  );

  // WARN: Small Screen toggle menu
  const toggleCls =
    "w-5 bg-zinc-200 transition-all duration-300 ease-linear h-1 rounded-md ";
  const smallScreen = (
    <>
      <div className="">
        <span className="text-[1.4rem] font-[800] flex justify-between px-3 py-2 items-center">
          <Hint />
          <span
            onClick={() => setShowNav(!showNav)}
            className="h-5 w-5 flex flex-wrap align-center justify-center "
          >
            <span
              className={`${toggleCls}${showNav && "h-5 border bg-zinc-800 rotate-45 bg-transparent "
                }`}
            ></span>
            <span
              className={`${toggleCls}${showNav && "h-5 border -mt-3 rotate-45 bg-zinc-200 "
                }`}
            ></span>
          </span>
        </span>
      </div>
      {showNav && nav}
    </>
  );

  const otherScreen = (
    <div>
      <span className="flex flex-wrap justify-between px-3 py-2">
        <Hint /> {nav}
      </span>
    </div>
  );

  return (
    <div className=" bg-zinc-800 grid w-screen h-auto fixed top-0 z-50 shadow-lg " ref={dom}>
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Navbar;
