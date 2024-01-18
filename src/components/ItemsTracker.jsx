import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export default function ItemsTracker() {
  const { totalPacked, totalItems } = useContext(ItemContext);

  return (
    <p>
      <b>{totalPacked}</b>
      {` / ${totalItems} items packed`}
    </p>
  );
}
