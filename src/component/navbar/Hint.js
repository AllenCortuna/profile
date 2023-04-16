import React, { useEffect } from "react";
import useHint from "../state/hint";
import { HiFolderOpen } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import {BsPersonCircle}  from "react-icons/bs";

const Hint = () => {
  const stat = useHint((state) => state.stat);
  const hint = useHint((state) => state.hint);

  useEffect(() => {}, [stat, hint]);
  return (
    <span className="flex justify-start gap-2 content-center">
      {/* status */}

      <span className="text-amber-500 rounded-xl p-1 drop=shadow-md text-3xl">
        {stat === "home" && <BsPersonCircle/>}
        {stat === "contact" && <MdPermContactCalendar />}
        {stat === "project" && <HiFolderOpen />}
        {stat === "info" && <FaInfoCircle />}
      </span>
      <p className="text-white my-auto text-xs font-[400]">{hint}</p>
    </span>
  );
};

export default Hint;
