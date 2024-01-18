import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export const useItemsContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error(
      `useItemsContext is not available, must be used within ItemContextProvider.`
    );
  }

  return context;
};
