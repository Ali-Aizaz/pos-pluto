import Image from 'next/image'
import Link from 'next/link'

import { CardIcon } from 'components/Icons'

function Card({ card, value }) {
  const { color, image, tag, caption, link } = card
  return (
    <div className="ml-10 mb-5">
      <CardIcon color={color} />
      <div className="absolute flex aspect-video h-[300px] w-44 -translate-y-[300px] translate-x-48 flex-col justify-end object-contain">
        <Image src={image} alt="card " width={300} height={200} />
      </div>
      <div className="absolute -translate-y-[11.5rem] translate-x-5 space-y-8">
        <h1 className="text-2xl font-semibold">{tag}</h1>
        <h1 className="text-3xl font-bold">{value}</h1>
        <h1>
          <Link href={link} className="text-xl underline">
            {caption}
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Card
