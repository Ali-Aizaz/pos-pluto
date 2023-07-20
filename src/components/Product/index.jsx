import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'

import classNames from 'classnames'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const ProductComponent = ({ product, display, count }) => {
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
  }, [])

  return (
    <div
      className={classNames(
        'text-black/80 font-normal space-y-5 transition-maxHeight overflow-hidden',
        {
          'max-h-0': !display,
          'max-h-100': display,
        }
      )}
    >
      <div className="flex space-x-10">
        <div>
          <h1 className="text-base font-bold">Name</h1>
          <p>{product.name}</p>
        </div>
        <div>
          <h1 className="text-base font-bold">Category</h1>
          <p>{product.categoryName}</p>
        </div>
        {product.imageUrl && (
          <div>
            <h1 className="text-base font-bold">Image</h1>
            <Image src={image} alt={product.name} width={50} height={50} />
          </div>
        )}
        {count && (
          <div>
            <h1 className="text-base font-bold">Quantity</h1>
            <p>{count}</p>
          </div>
        )}
      </div>
      <div className="flex space-x-10">
        {Object.keys(product.details).map((key) => (
          <div key={key}>
            <h1 className="text-sm font-bold">{key}</h1>
            <p>{product.details[key]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComponent
