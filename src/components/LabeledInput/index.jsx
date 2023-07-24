import React, { forwardRef, useState } from 'react'

import classNames from 'classnames'

const LabeledInput = (
  { label, required, error, className, type, ...restProps },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex items-center space-x-3 relative">
        {label && (
          <h2 className="mb-2 text-xl text-text-gray">
            {label} {required && '*'}
          </h2>
        )}
        {error && (
          <h2 className="right-0 mb-6 absolute text-sm text-red">
            {error.message}
          </h2>
        )}
      </div>
      <div className="w-full relative">
        <input
          ref={ref}
          {...restProps}
          type={showPassword ? 'text' : type}
          className="rounded-xl bg-grayLight p-3 outline-none w-full"
        />
        {type === 'password' && (
          <button
            className="absolute right-5 top-3"
            type="button"
            onClick={handleShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  )
}

export default forwardRef(LabeledInput)
