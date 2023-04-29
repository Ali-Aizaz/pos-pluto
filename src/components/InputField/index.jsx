import Image from 'next/image'

import { memo } from 'react'

function InputField({ src, extraCss, onEdit }) {
  return (
    <div className={`flex rounded-xl bg-white ${extraCss}`}>
      <Image
        src={src}
        alt="input icon"
        width={60}
        height={10}
        className="aspect-square rounded-l-xl border-r border-black/20 bg-black/5 p-5"
      />
      <input
        className="rounded-r-xl p-4 text-xl focus:outline-none"
        onChange={onEdit}
      />
    </div>
  )
}

export default memo(InputField)
