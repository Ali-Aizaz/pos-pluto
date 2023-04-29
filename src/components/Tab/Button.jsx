import React from 'react'

import classNames from 'classnames'

function Button({ title, tabName, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        'transition-color min-w-[150px] border-b-4 p-3 text-center text-xl font-semibold duration-300',
        {
          'border-purple text-purple ': title === tabName,
          'text-light-gray': title !== tabName,
        }
      )}
    >
      {tabName}
    </button>
  )
}

export default Button
