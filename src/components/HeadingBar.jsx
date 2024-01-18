import ItemsTracker from "./ItemsTracker";
import Logo from "./Logo";

export default function HeadingBar({ totalItems, totalPacked }) {
  return (
    <header>
      <Logo />
      <ItemsTracker totalItems={totalItems} totalPacked={totalPacked} />
    </header>
  );
}
