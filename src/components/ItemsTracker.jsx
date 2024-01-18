import { useItemsContext } from "../lib/hooks";

export default function ItemsTracker() {
  const { totalPacked, totalItems } = useItemsContext();

  return (
    <p>
      <b>{totalPacked}</b>
      {` / ${totalItems} items packed`}
    </p>
  );
}
