import classNames from 'classnames'
import Loading from 'components/Loading'

function ButtonComponent({ className, label, type, onClick, isLoading }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={classNames(
        'rounded-lg bg-purple p-3 font-medium text-white',
        className
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Loading /> : label}
    </button>
  )
}

export default ButtonComponent
