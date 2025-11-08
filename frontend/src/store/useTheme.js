import { create } from "zustand";

export const useTheme = create((set, get) => ({
  menu: true,

  toggleMenu: () => set({ menu: !get().menu }),
}));
