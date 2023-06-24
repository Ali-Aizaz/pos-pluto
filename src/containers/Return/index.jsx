import { useCallback, useEffect, useState } from 'react'

import {
  LabeledInputComponent,
  Loading,
  UserDetailsComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const inv = {
  id: '',
  price: '',
  warranty: '',
  product: {
    id: '',
    name: '',
    details: {},
  },
  created_at: '',
}

export default function Return() {
  const [recipt, setRecipt] = useState('')
  const [item, setItem] = useState(inv)
  const [soldItems, setSoldItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGetItems = useCallback(() => {
    setIsLoading(true)
    fetchRequest(HttpMethods.GET, 'sold')
      .then(({ data }) => {
        if (data.count > 0) setSoldItems(data.result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const handleItemSelect = useCallback((soldItem) => {
    setItem(soldItem)
  }, [])

  const handleReturnItem = useCallback(
    (returnItem) => {
      const { id, count } = returnItem
      if (!soldItems) return

      setIsLoading(true)
      fetchRequest(HttpMethods.POST, 'inventory/return', { id, count })
        .then(() => {
          setItem(inv)
          handleGetItems()
        })
        .finally(() => setIsLoading(false))
    },
    [handleGetItems, soldItems]
  )

  useEffect(() => handleGetItems(), [handleGetItems])

  return (
    <section className="text-gray">
      <LabeledInputComponent
        value={recipt}
        setValue={setRecipt}
        placeholder="Enter recipt number or phone number"
        className="w-[350px]"
      />
      <div className="flex justify-between">
        <div className="">
          <div className="mt-10 space-y-5 border-t-2 p-3">
            <h1 className="text-base font-medium ">Sales Details: </h1>
            <ul className="flex text-xl ">
              <li className="w-40">Product name</li>
              <li className="w-40">Warranty</li>
              <li className="w-40">Price</li>
              <li className="w-40">Quantity</li>
            </ul>
          </div>
          <div className="mt-3 space-y-5 border-t-2 p-3 text-xl font-thin">
            {soldItems.map((soldItem) => (
              <button
                type="button"
                onClick={() => handleItemSelect(soldItem)}
                key={soldItem.id}
              >
                <ul className="flex cursor-pointer hover:bg-gray/5 rounded-2xl">
                  <li className="w-40">{soldItem.product.name}</li>
                  <li className="w-40">{soldItem.warranty} months</li>
                  <li className="w-40">{soldItem.price}</li>
                  <li className="w-40">{soldItem.count}</li>
                </ul>
              </button>
            ))}
          </div>
          {isLoading && (
            <div className="flex justify-center">
              <Loading className="w-10 h-10" />
            </div>
          )}
        </div>
        <UserDetailsComponent
          createdAt={item.createdAt}
          customerName={item.customerName}
          customerPhone={item.customerPhone}
          price={item.price}
          product={item.product}
          warranty={item.warranty}
          isLoading={isLoading}
          onReturn={handleReturnItem}
        />
      </div>
    </section>
  )
}
