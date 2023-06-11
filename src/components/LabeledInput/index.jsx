/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import classNames from 'classnames'

function LabeledInput({ onEdit, label, className, ...restProps }) {
  return (
    <div className={classNames('flex flex-col', className)}>
      {label && <h2 className="mb-2 text-xl text-text-gray">{label}</h2>}
      <input
        {...restProps}
        className="rounded-xl bg-bg-gray p-3 outline-none"
        onChange={onEdit}
      />
    </div>
  )
}

export default LabeledInput
