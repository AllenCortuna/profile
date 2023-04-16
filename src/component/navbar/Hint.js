import React from "react";
import useHint from "../state/hint";

const Hint = () => {
  const hint = useHint(state => state.hint)
  return (
    <span className="flex justify-start gap-2 content-center">
    {/* logo */}
      <span className="text-zinc-100 font-bold bg-zinc-200 rounded-xl p-1 text-zinc-900">
        AC
      </span>
    <p className="text-white my-auto text-xs font-[400]">
        {hint} 
    </p>
    </span>
  );
};

export default Hint;
