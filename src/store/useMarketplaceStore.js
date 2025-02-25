import { create } from 'zustand';
import { axiosInstance } from '@/lib/axios';

export const useMarketplaceStore = create((set, get) => ({
  loading: false,
  error: '',
  item: [],
  cache: {}, // 캐싱 객체 추가

  fetchMarketplace: async ({ itemName }) => {
    const { cache } = get();

    try {
      set({ loading: true, error: '' });

      // 캐시 확인 후 없으면 API 요청
      if (!cache[itemName]) {
        const res = await axiosInstance.get(`/marketplace?itemName=${itemName}`);
        const itemData = res.data.item.item;

        // 데이터 저장 및 캐시에 추가
        set((state) => ({
          item: itemData,
          cache: { ...state.cache, [itemName]: itemData },
        }));
      } else {
        // 캐시에서 데이터 사용
        set({ item: cache[itemName] });
      }
    } catch (error) {
      set({ error: `아이템을 찾는 중 에러가 발생했습니다.: ${error?.message || error}` });
      console.error('fetchMarketplace Error:', error);
    } finally {
      set({ loading: false });
    }
  },
}));
