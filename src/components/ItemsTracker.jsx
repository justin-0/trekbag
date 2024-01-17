export default function ItemsTracker({ items }) {
  const packed = items.filter((item) => item.packed === true);

  return (
    <p>
      <b>{packed.length}</b>
      {` / ${items.length} items packed`}
    </p>
  );
}
