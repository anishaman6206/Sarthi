"use client";

import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";
import type { Career } from "@/lib/data/careers";
import type { Category, Grade } from "@/lib/data/scholarships";
import type { IncomeBracket } from "@/components/personalization/PersonalizeModal";

export interface UserProfile {
  grade?: Grade;
  homeState?: string;
  familyIncome?: number;
  category?: Category;
  chosenCareerSlug?: Career["slug"];
  incomeBracket?: IncomeBracket;
}

interface UserState {
  profile: UserProfile;
  currentStage: string | undefined;
  setProfile: (next: Partial<UserProfile>) => void;
  setChosenCareer: (slug: Career["slug"] | undefined) => void;
  resetProfile: () => void;
  setCurrentStage: (stage: string | undefined) => void;
}

const initialProfile: UserProfile = {
  grade: undefined,
  homeState: undefined,
  familyIncome: undefined,
  category: undefined,
  chosenCareerSlug: undefined,
  incomeBracket: undefined,
};

const isBrowser = (): boolean =>
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const safeStorage: StateStorage = {
  getItem: (name: string): string | null => {
    if (!isBrowser()) return null;
    try {
      return window.localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    if (!isBrowser()) return;
    try {
      window.localStorage.setItem(name, value);
    } catch {
      /* quota exceeded or storage disabled — silently ignore */
    }
  },
  removeItem: (name: string): void => {
    if (!isBrowser()) return;
    try {
      window.localStorage.removeItem(name);
    } catch {
      /* silently ignore */
    }
  },
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: { ...initialProfile },
      currentStage: undefined,
      setProfile: (next) =>
        set((state) => ({ profile: { ...state.profile, ...next } })),
      setChosenCareer: (slug) =>
        set((state) => ({ profile: { ...state.profile, chosenCareerSlug: slug } })),
      resetProfile: () => set({ profile: { ...initialProfile }, currentStage: undefined }),
      setCurrentStage: (stage) => set({ currentStage: stage }),
    }),
    {
      name: "sarthi.user.v1",
      storage: createJSONStorage(() => safeStorage),
      partialize: (state) => ({
        profile: state.profile,
        currentStage: state.currentStage,
      }),
      skipHydration: true,
    },
  ),
);

/**
 * Hook to safely rehydrate the persisted Zustand store on the client.
 * Call this once in a top-level client component (e.g. a Providers boundary).
 */
export const useHydrateUserStore = (): void => {
  if (typeof window === "undefined") return;
  void useUserStore.persist.rehydrate();
};
