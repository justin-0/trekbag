// import { useItemsContext } from "../lib/hooks";
import Button from "./Button";
import { useState, useRef } from "react";
import { useItemsStore } from "../store/itemsStore";

export default function AddItemForm() {
  // const { handleAddItem } = useItemsContext();
  const { addItem } = useItemsStore();
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      inputRef.current.focus();
      return;
    }

    addItem({
      id: Date.now() + 10,
      name: text,
      packed: false,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        autoFocus={true}
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
}
