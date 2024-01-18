import EmptyView from "./EmptyView";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "default", label: "Sort by Default" },
  { value: "packed", label: "Sort by Packed" },
  { value: "unpacked", label: "Sort by Unpacked" },
];

export default function ItemList({
  items,
  handleCompleteItem,
  handleDeleteItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = items.toSorted((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <div className="sorting">
          <Select
            defaultValue={options[0]}
            onChange={(option) => setSortBy(option.value)}
            options={options}
          />
        </div>
      ) : null}
      {sortedItems.map((item) => (
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
