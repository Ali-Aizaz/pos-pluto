import { useCallback, useEffect, useMemo, useState } from 'react'

import { LabeledInputComponent, Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

export default function SalesHistory() {
  const [recipt, setRecipt] = useState('')
  const [soldItems, setSoldItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getSalesList = useCallback(() => {
    setIsLoading(true)
    fetchRequest(HttpMethods.GET, 'sold')
      .then(({ data }) => {
        if (data.count > 0) setSoldItems(data.result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const soldItemsList = useMemo(() => {
    return soldItems.map((soldItem) => (
      <ul className="flex" key={soldItem.id}>
        <li className="w-50">{soldItem.id}</li>
        <li className="w-50">{soldItem.customerName}</li>
        <li className="w-50">{soldItem.customerPhone}</li>
        <li className="w-50">{soldItem.product.name}</li>
        <li className="w-50">{soldItem.count}</li>
        <li className="w-50">{soldItem.warranty} months</li>
        <li className="w-50">{soldItem.price}</li>
      </ul>
    ))
  }, [soldItems])

  useEffect(() => getSalesList(), [getSalesList])

  return (
    <section className="flex flex-col">
      <div className="flex w-4/5 justify-end">
        <LabeledInputComponent
          value={recipt}
          setValue={setRecipt}
          placeholder="Enter recipt number or phone number"
          className="w-[350px]"
        />
      </div>
      <div className="w-full">
        <div className="space-y-5 p-3">
          <ul className="flex text-xl ">
            <li className="w-50">Reciept No</li>
            <li className="w-50 ">Customer name</li>
            <li className="w-50 ">Phone number</li>
            <li className="w-50 ">Product</li>
            <li className="w-50 ">Quantity</li>
            <li className="w-50 ">Warranty</li>
            <li className="w-50 ">Price</li>
          </ul>
        </div>
        <div className="space-y-5 border-t-2 p-3 text-xl font-thin">
          {soldItemsList}
        </div>
        {isLoading && (
          <div className="flex justify-center">
            <Loading className="w-10 h-10" />
          </div>
        )}
      </div>
    </section>
  )
}
