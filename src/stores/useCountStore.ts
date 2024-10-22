import { create } from "zustand";

interface CountState {
	count: number;
	incrementCount: () => void;
}

export const useCountStore = create<CountState>((set) => ({
	count: 0,
	incrementCount: () => set((state) => ({ count: state.count + 1 })),
}));
