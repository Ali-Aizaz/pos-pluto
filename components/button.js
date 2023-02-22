export default function Button({ label, onChange, extraCss, type }) {
  return (
    <button
      type={type}
      onClick={onChange}
      className={`bg-theme-purple p-3 rounded-lg text-white font-medium ${extraCss}`}
    >
      {label}
    </button>
  );
}
