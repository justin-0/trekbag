export default function Button({ children, secondary, onClick }) {
  return (
    <button
      className={`btn ${secondary ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
