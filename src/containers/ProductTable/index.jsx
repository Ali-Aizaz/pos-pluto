import Image from 'next/image'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const ProductItem = ({ item }) => {
  const [image, setImage] = useState('')

  const fetchImage = useCallback(() => {
    fetchRequest(HttpMethods.GET, `image/${item.imageUrl}`).then(({ data }) => {
      setImage(data)
    })
  }, [item.imageUrl])

  useEffect(() => {
    fetchImage()
  }, [fetchImage])

  return (
    <ul className="flex gap-x-7 p-2" key={item.id}>
      <li className="w-50">{item.name}</li>
      <li className="w-50 ">{item.categoryName}</li>
      <li className="w-50 ">
        <Image src={image} alt={item.name} width={70} height={100} />
      </li>
    </ul>
  )
}

const ProductTable = ({ isLoading, productList, handleProduct }) => {
  const itemsList = useMemo(
    () =>
      productList.map((item) => (
        <button
          onClick={() => handleProduct(item)}
          key={item.id}
          className=" border-t first:border-t-0 border-black/20 hover:bg-black/10"
          type="button"
        >
          <ProductItem item={item} />,
        </button>
      )),
    [handleProduct, productList]
  )

  return (
    <div className="w-min border border-black/20 rounded-md">
      <div className="space-y-2 text-gray font-medium p-3 ">
        <ul className="flex text-xl gap-x-7">
          <li className="w-50">Product Name</li>
          <li className="w-50 ">Category</li>
          <li className="w-50 ">Image</li>
        </ul>
      </div>
      <div className="space-y-2 text-xl font-thin overflow-y-auto border-t first:border-t-0 min-h-[50px] max-h-[450px] rounded border-black/20">
        {productList.length > 0 && itemsList}
        {isLoading && (
          <div className="flex w-full justify-center py-8">
            <Loading className="border-black w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductTable
