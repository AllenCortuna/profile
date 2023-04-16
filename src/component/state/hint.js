import { create } from "zustand";

const useHint = create((set) => ({
  stat: "info",
  hint: "This is a hint !!",
  setStat: (newStat, newHint) => set(() => ({ stat: newStat, hint: newHint })),
}));

export default useHint;
