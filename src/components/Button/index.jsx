import classNames from 'classnames'

function ButtonComponent({ className, label, type, onClick, disabled }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={classNames(
        'rounded-lg bg-purple p-3 font-medium text-white',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default ButtonComponent
