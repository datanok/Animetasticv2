import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Anime {
    data: [];
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        items: any;
       
      };
}

interface State {
    topAnime: any;
    topManga: any[]; // Replace `any` with a more specific type if possible
    loading: boolean;
    error: string | null; // Use string or null for better error handling
    execute: () => Promise<void>; // Define the type of `execute` function
}

const initialState: Omit<State, 'execute'> = {
    topAnime: [],
    topManga: [],
    loading: false,
    error: null
};

export const useStore = create<State>((set) => ({
    ...initialState,
    execute: async () => {
        set((state) => ({ ...state, loading: true, error: null })); // Keep other state values intact
        try {
            const res = await fetch('/api/topAnime');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            console.log(data);
            set({ topAnime: data, loading: false, error: null });
        } catch (e) {
            console.error(e);
            set({ topAnime: [], loading: false, error: e instanceof Error ? e.message : 'Unknown error' });
        }
    }
}));
