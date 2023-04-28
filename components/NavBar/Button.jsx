import Link from 'next/link';
import { useRouter } from 'next/router';

import { memo } from 'react';

function Button({ hover, title, href, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <div
        className={`flex items-center space-x-10 rounded-xl py-3 px-4  ${
          router.asPath === href ? 'bg-purple' : 'hover:bg-light-black'
        }`}
      >
        {children}
        <h1
          className={`text-2xl font-medium ${
            hover ? 'w-[100px]' : 'hidden w-0'
          }`}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default memo(Button);
