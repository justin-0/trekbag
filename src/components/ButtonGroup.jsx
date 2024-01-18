import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleCompleteAll,
    handleIncompleteAll,
    handleInitialItems,
    handleResetItems,
  } = useItemsContext();

  return (
    <div className="button-group">
      <Button secondary={true} onClick={handleCompleteAll}>
        Mark all as complete
      </Button>
      <Button secondary={true} onClick={handleIncompleteAll}>
        Mark all as incomplete
      </Button>
      <Button secondary={true} onClick={handleInitialItems}>
        Reset to initial
      </Button>
      <Button secondary={true} onClick={handleResetItems}>
        Clear list
      </Button>
    </div>
  );
}
