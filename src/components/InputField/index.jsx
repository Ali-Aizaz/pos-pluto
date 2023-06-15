/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react'

import classNames from 'classnames'

function InputField({ children, className, error, ...restProps }, ref) {
  return (
    <div>
      <h2 className="text-sm text-red">{error?.message}</h2>
      <div
        className={classNames(
          { 'border-red border': error },
          'flex rounded-xl items-center pl-4 space-x-4 bg-white',
          className
        )}
      >
        {children}
        <input
          ref={ref}
          {...restProps}
          className="border-l border-black/20 text-black/90 rounded-r-xl p-3 w-full text-xl focus:outline-none"
        />
      </div>
    </div>
  )
}

export default forwardRef(InputField)
