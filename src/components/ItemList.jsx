import EmptyView from "./EmptyView";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ItemList({
  items,
  handleCompleteItem,
  handleDeleteItem,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <div className="sorting">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      ) : null}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleCompleteItem={handleCompleteItem}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, handleCompleteItem, handleDeleteItem }) {
  return (
    <li className="item">
      <label onChange={() => handleCompleteItem(item.id)}>
        <input type="checkbox" checked={item.packed} onChange={() => {}} />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
