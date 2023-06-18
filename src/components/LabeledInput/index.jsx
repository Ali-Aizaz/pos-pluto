/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'

import classNames from 'classnames'

function LabeledInput(
  { onEdit, label, required, error, className, ...restProps },
  ref
) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex items-center space-x-3 relative">
        {label && (
          <h2 className="mb-2 text-xl text-text-gray">
            {label} {required && '*'}
          </h2>
        )}
        <h2 className="right-0 absolute text-sm text-red">{error?.message}</h2>
      </div>
      <input
        ref={ref}
        {...restProps}
        className="rounded-xl bg-grayLight p-3 outline-none"
        onChange={onEdit}
      />
    </div>
  )
}

export default forwardRef(LabeledInput)
