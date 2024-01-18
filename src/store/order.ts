import { create } from 'zustand';

interface OrderState {
  totalPrice: number;
  totalAmount: number;
  setTotalPrice: (updater: (prevTotalPrice: number) => number) => void;
  setTotalAmount: (updater: (prevTotalAmount: number) => number) => void;
  reset: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  totalPrice: 0,
  totalAmount: 0,
  setTotalPrice: (updater) => {
    set((state) => {
      return { totalPrice: updater(state.totalPrice) };
    });
  },
  setTotalAmount: (updater) => {
    set((state) => {
      return { totalAmount: updater(state.totalAmount) };
    });
  },
  reset: () => set({ totalPrice: 0, totalAmount: 0 }),
}));
