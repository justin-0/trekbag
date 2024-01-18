import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export const useItemsContext = () => {
  return useContext(ItemContext);
};
