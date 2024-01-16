export default function Button({ children, secondary }) {
  return (
    <button className={`btn ${secondary ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
