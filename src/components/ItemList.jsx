import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleCompleteItem,
  handleDeleteItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
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
