import React from 'react'

function ButtonComponent({ extraCss, label, type }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={`rounded-lg bg-purple p-3 font-medium text-white ${extraCss}`}
    >
      {label}
    </button>
  )
}

export default ButtonComponent
