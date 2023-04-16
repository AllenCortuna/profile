import { create } from "zustand";

const useHint = create((set) => ({
  stat: "info",
  hint: "hover or click any element for hint !!",
  setStat: (newStat, newHint) => set(() => ({ stat: newStat, hint: newHint })),
}));

export default useHint;
