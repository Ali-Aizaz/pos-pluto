/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, useState } from 'react'

import classNames from 'classnames'

function InputField({ children, className, error, type, ...restProps }, ref) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <h2 className="text-sm text-red">{error?.message}</h2>
      <div
        className={classNames(
          { 'border-red border': error },
          'flex rounded-xl items-center pl-4 space-x-4 relative bg-white',
          className
        )}
      >
        {children}
        <input
          ref={ref}
          {...restProps}
          type={showPassword ? 'text' : type}
          className="border-l border-black/20 text-black/90 rounded-r-xl p-3 w-full text-xl focus:outline-none"
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

export default forwardRef(InputField)
