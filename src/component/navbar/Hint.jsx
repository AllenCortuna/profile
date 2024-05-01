import React, { useEffect } from "react";
import useHint from "../state/hint";
import { HiFolderOpen } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Hint = () => {
  const stat = useHint((state) => state.stat);
  const hint = useHint((state) => state.hint);

  const el = React.useRef(null);
  // function that display hint
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [hint],
      typeSpeed: 20,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [hint]);

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
      <p className="text-white my-auto text-xs sm:text-sm font-[800] space">
        <span ref={el} />
      </p>
    </Link>
  );
};

export default Hint;
