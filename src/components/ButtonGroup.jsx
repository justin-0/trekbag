import Button from "./Button";
// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../store/itemsStore";

export default function ButtonGroup() {
  // const {
  //   handleCompleteAll,
  //   handleIncompleteAll,
  //   handleInitialItems,
  //   handleResetItems,
  // } = useItemsContext();
  const {
    completeAllItems,
    incompleteAllItems,
    resetToInitialItems,
    removeAllItems,
  } = useItemsStore();

  return (
    <div className="button-group">
      <Button secondary={true} onClick={completeAllItems}>
        Mark all as complete
      </Button>
      <Button secondary={true} onClick={incompleteAllItems}>
        Mark all as incomplete
      </Button>
      <Button secondary={true} onClick={resetToInitialItems}>
        Reset to initial
      </Button>
      <Button secondary={true} onClick={removeAllItems}>
        Clear list
      </Button>
    </div>
  );
}
