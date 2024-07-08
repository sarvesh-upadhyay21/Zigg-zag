import { create } from "zustand";
import { persist } from "zustand/middleware";

let appStore = (sat) => ({
  depen:true,
  updateOpen: (dopen) => sat((state) => ({ dopen:dopen })),
});
appStore = persist(appStore, {name: "my_app_store"});
export const useAppStore = create(appStore);
