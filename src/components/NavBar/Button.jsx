import Link from 'next/link'
import { useRouter } from 'next/router'

import { memo } from 'react'

import classNames from 'classnames'

function Button({ hover, title, href, children }) {
  const router = useRouter()
  return (
    <Link href={href}>
      <div
        className={classNames(
          'flex items-center space-x-10 rounded-xl py-3 px-4 ',
          {
            'bg-purple': router.path === href,
            'hover:bg-light-black': router.path !== href,
          }
        )}
      >
        {children}
        <h1
          className={classNames(`text-2xl font-medium `, {
            'w-[100px]': hover,
            'hidden w-0': !hover,
          })}
        >
          {title}
        </h1>
      </div>
    </Link>
  )
}

export default memo(Button)
