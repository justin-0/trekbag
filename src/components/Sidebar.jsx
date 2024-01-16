import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ setText, text, setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setText={setText} text={text} setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
