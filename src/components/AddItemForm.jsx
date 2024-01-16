import Button from "./Button";

export default function AddItemForm({ setText, text, setItems }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <input type="text" value={text} onChange={handleChange} />
      <Button>Add to list</Button>
    </form>
  );
}
