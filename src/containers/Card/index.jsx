import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'

import { CardComponent, Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const cards = [
  {
    tag: 'Total Sales',
    price: '10k Sales',
    value: 'salesBalance',
    link: '/sales?tab=Sales History',
    caption: 'Balance sheet',
    image: '/discount.png',
    color: '#0BF4C8',
  },
  {
    tag: 'Orders Completed',
    price: '750',
    value: 'orderCount',
    link: '/sales?tab=Sales History',
    caption: 'view Sales history',
    image: '/bags.png',
    color: '#FAD85D',
  },
  {
    tag: 'Total Employees',
    price: '50',
    value: 'employeeCount',
    caption: 'View all Employees',
    link: 'roles?tab=Manage',
    image: '/woman.png',
    color: '#7A99EA',
  },
]

function Card() {
  const [image, setImage] = useState('')
  const [store, setStore] = useState(null)

  const fetchImage = useCallback(async () => {
    if (store)
      fetchRequest(HttpMethods.GET, `image/${store.imageUrl}`).then(
        ({ data }) => {
          setImage(data)
        }
      )
  }, [store])

  const fetchStore = useCallback(async () => {
    fetchRequest(HttpMethods.GET, `users/store`).then(({ data }) => {
      setStore(data)
    })
  }, [])

  useEffect(() => {
    fetchImage()
  }, [fetchImage])

  useEffect(() => {
    fetchStore()
  }, [fetchStore])

  return store ? (
    <div className="w-full">
      <div className="flex rounded-md px-2 pl-20 pr-36 space-x-4 self-start w-full justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Hello, {store.name}</h1>
        </div>
        {image.length > 0 && (
          <Image
            src={image}
            alt="store"
            width={150}
            height={150}
            className="aspect-square rounded-full"
          />
        )}
      </div>
      <div className="flex w-full flex-wrap justify-start">
        {cards.map((card) => (
          <CardComponent key={card.tag} value={store[card.value]} card={card} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default Card
