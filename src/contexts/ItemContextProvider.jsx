import { createContext, useEffect, useState } from "react";
import { initialItems } from "../constants/initial-items";

const ItemContext = createContext();

export default function ItemContextProvier({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed === true).length;
  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleCompleteAll = () => {
    const packed = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(packed);
  };

  const handleIncompleteAll = () => {
    const unpacked = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(unpacked);
  };

  const handleResetItems = () => setItems([]);

  const handleInitialItems = () => setItems(initialItems);

  const handleCompleteItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDeleteItem = (id) =>
    setItems(items.filter((item) => item.id !== id));

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider
      value={
        (items,
        totalItems,
        totalPacked,
        handleAddItem,
        handleCompleteAll,
        handleIncompleteAll,
        handleResetItems,
        handleInitialItems,
        handleCompleteItem,
        handleDeleteItem)
      }
    >
      {children}
    </ItemContext.Provider>
  );
}
