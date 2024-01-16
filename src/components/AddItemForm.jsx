import Button from "./Button";
import { useState, useRef } from "react";

export default function AddItemForm({ setItems }) {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(inputRef.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      inputRef.current.focus();
      return;
    }
    setItems((i) => [
      ...i,
      {
        id: i.length + 1,
        name: text,
        packed: false,
      },
    ]);
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
