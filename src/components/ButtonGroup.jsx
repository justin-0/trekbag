import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div className="button-group">
      <Button secondary={true}>Mark all as complete</Button>
      <Button secondary={true}>Mark all as incomplete</Button>
      <Button secondary={true}>Reset to initial</Button>
      <Button secondary={true}>Clear list</Button>
    </div>
  );
}
