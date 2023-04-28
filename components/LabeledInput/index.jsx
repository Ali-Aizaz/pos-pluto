const LabeledInput = ({ onEdit, label, extraCss, ...restProps }) => {
  return (
    <div className={`flex flex-col  ${extraCss}`}>
      {label && <label className="text-xl text-text-gray mb-2">{label}</label>}
      <input
        className="p-3 bg-bg-gray rounded-xl outline-none"
        {...restProps}
        type={"text"}
        onChange={onEdit}
      />
    </div>
  );
};

export default LabeledInput;
