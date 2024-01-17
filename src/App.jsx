import { useState } from "react";
import { initialItems } from "./constants/initial-items";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import HeadingBar from "./components/HeadingBar";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [items, setItems] = useState(initialItems);

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
    const index = items.findIndex((item) => item.id === id);
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      packed: !updatedItems[index].packed,
    };

    console.log(updatedItems);

    setItems(updatedItems);
  };

  const handleDeleteItem = (id) =>
    setItems(items.filter((item) => item.id !== id));

  return (
    <>
      <BackgroundHeading />
      <main>
        <HeadingBar items={items} />
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
