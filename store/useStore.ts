import { create } from 'zustand';

export type HeaderMode = 'chaos' | 'drift' | 'warning' | 'order';

interface UIState {
    headerMode: HeaderMode;
    isMenuOpen: boolean;
    setHeaderMode: (mode: HeaderMode) => void;
    toggleMenu: () => void;
    setMenuOpen: (isOpen: boolean) => void;
}

export const useStore = create<UIState>((set) => ({
    headerMode: 'chaos', // Default to chaos (transparent)
    isMenuOpen: false,
    setHeaderMode: (mode) => set({ headerMode: mode }),
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));
