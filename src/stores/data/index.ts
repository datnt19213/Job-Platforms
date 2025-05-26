import { create } from 'zustand';

type ProductStore = {
  filter: string;
  setFilter: (value: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  filter: '',
  setFilter: (value) => set({ filter: value }),
}));
