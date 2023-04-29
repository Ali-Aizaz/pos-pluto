import { memo } from 'react'

import classNames from 'classnames'

function InputField({ onEdit, children, placeholder, className }) {
  return (
    <div
      className={classNames(
        'flex rounded-xl items-center px-4 space-x-4 bg-white',
        className
      )}
    >
      {children}
      <input
        placeholder={placeholder}
        className="border-l border-black/20 rounded-r-xl p-3 text-xl focus:outline-none"
        onChange={onEdit}
      />
    </div>
  )
}

export default memo(InputField)
