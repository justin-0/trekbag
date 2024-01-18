import { useEffect, useState } from "react";
import { initialItems } from "./constants/initial-items";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import HeadingBar from "./components/HeadingBar";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

export default function App() {
  const localStorageItems = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(localStorageItems || initialItems);

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
    <>
      <BackgroundHeading />
      <main>
        <HeadingBar totalItems={totalItems} totalPacked={totalPacked} />
        <ItemList
          items={items}
          handleCompleteItem={handleCompleteItem}
          handleDeleteItem={handleDeleteItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleCompleteAll={handleCompleteAll}
          handleIncompleteAll={handleIncompleteAll}
          handleInitialItems={handleInitialItems}
          handleResetItems={handleResetItems}
        />
      </main>
      <Footer />
    </>
  );
}
