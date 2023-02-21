export default function InputField({
  value,
  setValue,
  placeholder,
  label,
  extraCss,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`flex flex-col space-y-2 ${extraCss}`}>
      {label && (
        <label className="text-2xl text-theme-text-gray">{label}</label>
      )}
      <input
        className="p-5 bg-theme-bg-gray rounded-xl outline-none"
        placeholder={placeholder}
        type={"text"}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
