import { create } from "zustand";

const useHint = create((set) => ({
  stat: "info",
  hint: " Click/Hover elements for hint!",
  setStat: (newStat, newHint) => set(() => ({ stat: newStat, hint: newHint })),
}));

export default useHint;
