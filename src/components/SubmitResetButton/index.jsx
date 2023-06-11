import React from 'react'

import ButtonComponent from 'components/Button'

function SubmitResetButton({ onReset, isLoading }) {
  return (
    <div className="flex items-end space-x-4">
      <ButtonComponent
        type="submit"
        label="Update Settings"
        className="w-[250px] text-xl"
        isLoading={isLoading}
      />
      <button
        type="button"
        className="pb-2 text-xl font-medium text-gray"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  )
}

export default SubmitResetButton
