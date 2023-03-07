const LabeledInput = ({ onEdit, label, extraCss, ...restProps }) => {
  return (
    <div className={`flex flex-col  ${extraCss}`}>
      {label && (
        <label className="text-xl text-theme-text-gray mb-2">{label}</label>
      )}
      <input
        className="p-3 bg-theme-bg-gray rounded-xl outline-none"
        {...restProps}
        type={"text"}
        onChange={onEdit}
      />
    </div>
  );
};

export default LabeledInput;
