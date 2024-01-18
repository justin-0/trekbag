export default function ItemsTracker() {
  return (
    <p>
      <b>{totalPacked}</b>
      {` / ${totalItems} items packed`}
    </p>
  );
}
