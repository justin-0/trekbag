import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div className="button-group">
      <Button secondary={true} onClick={onCompleteAll}>
        Mark all as complete
      </Button>
      <Button secondary={true} onClick={onIncompleteAll}>
        Mark all as incomplete
      </Button>
      <Button secondary={true} onClick={onInitialItems}>
        Reset to initial
      </Button>
      <Button secondary={true} onClick={onResetItems}>
        Clear list
      </Button>
    </div>
  );
}
