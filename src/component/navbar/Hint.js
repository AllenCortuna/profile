import React, { useCallback, useEffect } from "react";
import useHint from "../state/hint";
import { HiFolderOpen } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hint = () => {
  const stat = useHint((state) => state.stat);
  const hint = useHint((state) => state.hint);

  const text = hint;
  const speed = 50;
  let i = 0;

  // function that display hint
  const typeWriter = useCallback(() => {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      document.getElementById("typewriter").style.opacity = 1;
    }
  }, [i, text]);

  useEffect(() => {
    typeWriter();
    return () => {
      document.getElementById("typewriter").innerHTML = "";
    };
  }, [stat, hint, typeWriter]);

  const setStat = useHint((state) => state.setStat);

  return (
    <Link
      className="flex justify-start gap-2 content-center"
      to={"/"}
      onClick={() => setStat("home", "Welcome !")}
    >
      {/* status */}

      <span className="text-amber-500 rounded-xl p-1 drop=shadow-md text-3xl">
        {stat === "home" && <BsPersonCircle />}
        {stat === "contact" && <MdPermContactCalendar />}
        {stat === "project" && <HiFolderOpen />}
        {stat === "info" && <FaInfoCircle />}
      </span>
      <p
        className="text-white my-auto text-xs font-[400] space"
        id="typewriter"
      ></p>
    </Link>
  );
};

export default Hint;
