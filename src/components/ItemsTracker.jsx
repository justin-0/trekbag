import { useItemsStore } from "../store/itemsStore";

export default function ItemsTracker() {
  const items = useItemsStore((state) => state.items);

  const totalPacked = items.filter((item) => item.packed === true).length;

  return (
    <p>
      <b>{totalPacked}</b>
      {` / ${items.length} items packed`}
    </p>
  );
}
