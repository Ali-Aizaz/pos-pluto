/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'

import classNames from 'classnames'

function LabeledInput({ onEdit, label, error, className, ...restProps }, ref) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <h2 className="mb-2 text-xl text-text-gray">{label}</h2>
      <h2 className="text-sm text-red">{error?.message}</h2>
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
