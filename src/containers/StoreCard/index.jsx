import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'

import { Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const StoreCard = () => {
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
    <div className="flex rounded-md p-2 pl-20 pr-36 space-x-4 self-start w-full justify-between items-center h-60">
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
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default StoreCard
