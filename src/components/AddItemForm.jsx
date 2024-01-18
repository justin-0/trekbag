import Button from "./Button";
import { useState, useRef } from "react";

export default function AddItemForm() {
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

    handleAddItem({
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
