import React from 'react';

function LabeledInput({ onEdit, label, extraCss }) {
  return (
    <div className={`flex flex-col  ${extraCss}`}>
      {label && <h2 className="mb-2 text-xl text-text-gray">{label}</h2>}
      <input
        className="rounded-xl bg-bg-gray p-3 outline-none"
        type="text"
        onChange={onEdit}
      />
    </div>
  );
}

export default LabeledInput;
