import React from 'react';

import ButtonComponent from '../Button';

function SubmitResetButton({ onReset }) {
  return (
    <div className="flex items-end space-x-4">
      <ButtonComponent
        type="submit"
        label="Update Settings"
        extraCss="w-[250px] text-xl"
      />
      <button
        type="button"
        className="pb-2 text-xl font-medium text-gray"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default SubmitResetButton;
