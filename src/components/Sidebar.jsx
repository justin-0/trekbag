import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleCompleteAll,
  handleIncompleteAll,
  handleInitialItems,
  handleResetItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        onCompleteAll={handleCompleteAll}
        onIncompleteAll={handleIncompleteAll}
        onInitialItems={handleInitialItems}
        onResetItems={handleResetItems}
      />
    </div>
  );
}
