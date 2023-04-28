const LabeledInput = ({ onEdit, label, extraCss, ...restProps }) => {
  return (
    <div className={`flex flex-col  ${extraCss}`}>
      {label && <label className="mb-2 text-xl text-text-gray">{label}</label>}
      <input
        className="rounded-xl bg-bg-gray p-3 outline-none"
        {...restProps}
        type={"text"}
        onChange={onEdit}
      />
    </div>
  );
};

export default LabeledInput;
