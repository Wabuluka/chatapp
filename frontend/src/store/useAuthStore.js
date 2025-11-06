import { create } from "zustand";
export const useAuthStore = create((set) => ({
  authUser: { name: "John", id: 123, age: 24 },
}));
