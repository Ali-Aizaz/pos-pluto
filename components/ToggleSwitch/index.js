const ToggleSwitch = ({ value, onEdit }) => {
  return (
    <label className="relative inline-block w-16 h-9 rounded-full">
      <input
        value={value}
        onChange={onEdit}
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
      />
      <span
        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-theme-dark-blue rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full
  before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-theme-purple"
      ></span>
    </label>
  );
};

export default ToggleSwitch;
