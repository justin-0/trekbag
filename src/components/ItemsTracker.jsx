export default function ItemsTracker({ items }) {
  const packed = items.filter((item) => item.packed === true);

  return <p>{`${packed.length} / ${items.length} items packed`}</p>;
}
