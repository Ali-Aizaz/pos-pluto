import Link from 'next/link'

import classNames from 'classnames'

function Button({ title, tabName }) {
  return (
    <Link
      href={{ query: { tab: tabName } }}
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
    </Link>
  )
}

export default Button
