import React from 'react'

function ToggleSwitch({ value, onEdit }) {
  return (
    <h2 className="relative inline-block h-9 w-16 rounded-full">
      <input
        value={value}
        onChange={onEdit}
        type="checkbox"
        className="peer h-0 w-0 opacity-0"
      />
      <span
        className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-full bg-dark-blue duration-300 before:absolute before:bottom-1 before:left-1 before:h-7 before:w-7 before:rounded-full before:bg-white
  before:duration-300 before:content-[''] peer-checked:bg-purple peer-checked:before:translate-x-7"
      />
    </h2>
  )
}

export default ToggleSwitch
