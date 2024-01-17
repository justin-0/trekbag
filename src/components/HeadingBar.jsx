import ItemsTracker from "./ItemsTracker";
import Logo from "./Logo";

export default function HeadingBar({ items }) {
  return (
    <header>
      <Logo />
      <ItemsTracker items={items} />
    </header>
  );
}
