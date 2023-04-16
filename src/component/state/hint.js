import { create } from "zustand";

const useHint = create((set) => ({
  hint: "This is a hint !!",
  changeHint: (newHint) => set(() => ({ hint: newHint })),
}));

export default useHint;
