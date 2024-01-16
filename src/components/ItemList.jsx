import { useState } from "react";
import { initialItems } from "../constants/initial-items";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} name={item.name} packed={item.packed} />
      ))}
    </ul>
  );
}

function Item({ name, packed }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} />
        {name}
      </label>
      <button>❌</button>
    </li>
  );
}
