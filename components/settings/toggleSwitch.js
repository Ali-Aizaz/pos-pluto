export default function ToggleSwitch({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.checked);
  };
  return (
    <label className="relative inline-block w-20 h-9 rounded-full">
      <input
        value={value}
        onChange={handleChange}
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
      />
      <span
        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-theme-dark-blue rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full
    before:bg-white before:duration-300 peer-checked:before:translate-x-11 peer-checked:bg-theme-purple"
      ></span>
    </label>
  );
}
