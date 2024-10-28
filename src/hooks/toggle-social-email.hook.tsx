import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
    value: boolean;
    set: (value: boolean) => void;
};

export const useToggleSocialEmailStore = create<Store>()(
    persist(
        set => ({
            value: false,
            set: (value: boolean) => set(() => ({ value }))
        }),
        {
            name: "social-email-toggle", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
        }
    )
);
