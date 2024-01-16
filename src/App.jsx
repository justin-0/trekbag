import { useState } from "react";
import { initialItems } from "./constants/initial-items";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import HeadingBar from "./components/HeadingBar";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <BackgroundHeading />
      <main>
        <HeadingBar />
        <ItemList items={items} />
        <Sidebar setText={setText} text={text} setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}
