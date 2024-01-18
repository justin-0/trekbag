export default function ItemsTracker({ totalPacked, totalItems }) {
  return (
    <p>
      <b>{totalPacked}</b>
      {` / ${totalItems} items packed`}
    </p>
  );
}
