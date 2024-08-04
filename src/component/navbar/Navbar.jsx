import React, { useState, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Hint from "./Hint";
import useHint from "../state/hint";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const setStat = useHint((state) => state.setStat);
  const dom = React.useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 440);

  // current page name
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 440);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = [
    { name: "home", to: "", desc: "Welcome ", pageName: "/" },
    {
      name: "project",
      to: "project",
      desc: "List of Project",
      pageName: "/project",
    },
    {
      name: "contact",
      to: "contact",
      desc: "Contact Me ",
      pageName: "/contact",
    },
  ];

  const handleClick = (stat, hint) => {
    setStat(stat, hint);
  };

  // styling for the navbar items
  // WARN: navlink is in index.css
  const navlink =
    "text-zinc-400 text-sm font-semibold hover:text-zinc-100 font-normal hover:font-[900] transition-all ease-linear lowercase hover:uppercase duration-300";
  const activeNavlink =
    "text-lime-400 text-sm font-[900] transition-all ease-linear uppercase underline";

  // content for the navbar
  const nav = (
    <nav
      className={`my-auto grid gap-2 h-full p-4 ${!isSmallScreen && "grid-cols-3 py-1"
        }`}
    >
      {content.map((a) => (
        <Link
          key={a.name}
          to={`/${a.to}`}
          className="flex justify-center content-center w-full md:w-20"
          onClick={() => handleClick(a.name, a.desc)}
        >
          <p className={currentPage === a.pageName ? activeNavlink : navlink}>
            {a.name}
          </p>
        </Link>
      ))}
    </nav>
  );

  // WARN: Small Screen toggle menu
  const toggleCls =
    "w-5 bg-zinc-200 transition-all duration-300 ease-linear h-1 rounded-sm ";
  const smallScreen = (
    <>
      <div className="">
        <span className="text-[1.4rem] font-[800] flex justify-between px-3 py-2 items-center">
          <Hint />
          <span
            onClick={() => setShowNav(!showNav)}
            className="h-5 w-5 flex flex-wrap align-center justify-center -mb-2 "
          >
            <span
              className={`${toggleCls}${showNav && "h-5 border rotate-45 bg-zinc-200 "
                }`}
            ></span>
            <span
              className={`${toggleCls}${showNav && "h-5 -mt-3 rotate-45 bg-zinc-900 "
                }`}
            ></span>
          </span>
        </span>
      </div>
      {showNav && nav}
    </>
  );

  const otherScreen = (
    <span className="flex flex-wrap justify-between px-8 py-2">
      <Hint /> {nav}
    </span>
  );

  return (
    <div
      className="bg-zinc-900 grid w-screen h-auto fixed top-0 z-50 shadow-lg border-b border-zinc-700"
      ref={dom}
    >
      {isSmallScreen ? smallScreen : otherScreen}
    </div>
  );
};

export default Navbar;