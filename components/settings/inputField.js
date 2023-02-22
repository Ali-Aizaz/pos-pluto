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
    <div className={`flex flex-col  ${extraCss}`}>
      {label && (
        <label className="text-xl text-theme-text-gray mb-2">{label}</label>
      )}
      <input
        className="p-3 bg-theme-bg-gray rounded-xl outline-none"
        placeholder={placeholder}
        type={"text"}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
