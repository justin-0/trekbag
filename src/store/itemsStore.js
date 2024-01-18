import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../constants/initial-items";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItem) =>
        set((state) => ({ items: [...state.items, newItem] })),
      deleteItem: (id) =>
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        }),
      removeAllItems: () => set(() => ({ items: [] })),
      completeAllItems: () =>
        set((state) => {
          const packed = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: packed };
        }),
      resetToInitialItems: () => set(() => ({ items: initialItems })),
      incompleteAllItems: () =>
        set((state) => {
          const unpacked = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: unpacked };
        }),
      completeItem: (id) =>
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                packed: !item.packed,
              };
            }
            return item;
          });
          return { items: newItems };
        }),
    }),
    {
      name: "items",
    }
  )
);
