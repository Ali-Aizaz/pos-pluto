import Image from 'next/image'

import React, { useCallback, useEffect, useState } from 'react'

import ButtonComponent from 'components/Button'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

function UserDetails({
  price,
  warranty,
  product,
  customerName,
  customerPhone,
  createdAt,
  onReturn,
  isLoading,
}) {
  const [image, setImage] = useState('')

  const fetchImage = useCallback(async () => {
    fetchRequest(HttpMethods.GET, `image/${product.imageUrl}`).then(
      ({ data }) => {
        setImage(data)
      }
    )
  }, [product.imageUrl])

  useEffect(() => {
    fetchImage()
  }, [fetchImage])

  return (
    <section className="flex flex-col items-center border border-black/10 rounded-xl p-3">
      <div className="ml-5 flex max-h-100 w-76 flex-col items-center font-medium overflow-y-auto scrollbar-track-transparent [&>h1]:text-sm [&>h2]:text-xl">
        {customerName && (
          <div className="bg-theme-light-black/40 w-full p-2">
            <h2 className="capitalize text-purple">Name</h2>
            <h1 className=" text-black ">{customerName}</h1>
          </div>
        )}
        {customerPhone && (
          <div className="bg-theme-light-black/20 w-full p-2">
            <h2 className="capitalize text-purple">Phone number</h2>
            <h1 className=" text-black ">{customerPhone}</h1>
          </div>
        )}
        {product.imageUrl && (
          <div className="bg-theme-light-black/20 w-full p-2">
            <h1 className="capitalize text-purple">Image</h1>
            <Image src={image} alt={product.name} width={120} height={100} />
          </div>
        )}
        {product &&
          Object.keys(product.details).map((key) => (
            <div key={key} className="bg-theme-purple/40 w-full p-2">
              <h2 className="capitalize text-purple">{key}</h2>
              <h1 className=" font-medium text-black">
                {product.details[key]}
              </h1>
            </div>
          ))}
        {warranty && (
          <div className="bg-theme-light-black/20 w-full p-2">
            <h2 className="capitalize text-purple">Warranty</h2>
            <h1 className=" text-black ">{warranty} months</h1>
          </div>
        )}
        {price && (
          <div className="bg-theme-purple/40 w-full p-2">
            <h2 className="capitalize text-purple">Product Price</h2>
            <h1 className=" text-black ">{price}</h1>
          </div>
        )}
        {createdAt && (
          <div className="bg-theme-light-black/30 w-full p-2">
            <h2 className="capitalize text-purple">Date of sales</h2>
            <h1 className=" text-black ">{Date(createdAt)}</h1>
          </div>
        )}
      </div>
      {customerName && (
        <ButtonComponent
          onClick={onReturn}
          isLoading={isLoading}
          className="w-full bg-black mt-4 hover:bg-black/80"
          label="Return "
        />
      )}
    </section>
  )
}

export default UserDetails
