import { create } from "zustand";

const useHint = create((set) => ({
  stat: "info",
  hint: " Click or Hover any element!",
  setStat: (newStat, newHint) => set(() => ({ stat: newStat, hint: newHint })),
}));

export default useHint;
