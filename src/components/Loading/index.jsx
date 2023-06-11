import classNames from 'classnames'

const Loading = ({ className }) => {
  return (
    <div
      className={classNames(
        className,
        'border-current inline-block animate-spin border-white/50 w-5 h-5 rounded-full border-4 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
      )}
      role="status"
    />
  )
}

export default Loading
