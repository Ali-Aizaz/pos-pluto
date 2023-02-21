export default function Button({ label, onChange, extraCss, type }) {
  return (
    <button
      type={type}
      onChange={onChange}
      className={`bg-theme-purple p-4 rounded-xl font-medium ${extraCss}`}
    >
      {label}
    </button>
  );
}
