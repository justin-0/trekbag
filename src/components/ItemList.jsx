export default function ItemList({
  items,
  handleCompleteItem,
  handleDeleteItem,
}) {
  return (
    <ul>
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
