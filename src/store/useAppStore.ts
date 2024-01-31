"use client"
import AuthSlice from "./slices/createAuthSlice";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAppStore = create<AppStoreState>()(
  persist(
    (...a) => ({
      ...AuthSlice(...a),
    }),
    {
      name: "appState",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAppStore;
