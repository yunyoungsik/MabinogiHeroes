import { create } from 'zustand';
import { axiosInstance } from '@/lib/axios';

export const useRankingStore = create((set, get) => ({
  loading: false,
  rankings: { ad: [], ap: [] },
  hallOfHonors: {ad: [], ap: []},

  fetchRanking: async ({ type, page }) => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get(`/ranking?type=${type}&page=${page}`);
      set((state) => ({
        rankings: {
          ...state.rankings,
          ...(type === 0 ? { ad: res.data.ranking.ranking } : { ap: res.data.ranking.ranking }),
        },
      }));
    } catch (error) {
      console.error('fetchUser Error:', error);
    } finally {
      set({ loading: false });
    }
  },

  fetchHallOfHonors: async ({ type }) => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get(`/hall-of-honor?type=${type}`);
      set((state) => ({
        hallOfHonors: {
          ...state.hallOfHonors,
          ...(type === 0 ? { ad: res.data.hallOfHonor.ranking } : { ap: res.data.hallOfHonor.ranking }),
        },
      }));
    } catch (error) {
      console.error('fetchUser Error:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
