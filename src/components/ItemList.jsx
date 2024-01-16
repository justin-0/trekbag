export default function ItemList({ items }) {
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
        <input type="checkbox" checked={packed} onChange={() => {}} />
        {name}
      </label>
      <button>❌</button>
    </li>
  );
}
