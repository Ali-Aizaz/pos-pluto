import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  LabeledInputComponent,
  Loading,
  ProductDetailsComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import Modal from 'containers/Modal'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

export default function SalesHistory() {
  const searchRef = useRef(null)

  const [soldItems, setSoldItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [product, setProduct] = useState(null)

  const handleOpenModal = useCallback((value) => {
    setProduct(value)
    setShowProduct(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setProduct(null)
    setShowProduct(false)
  }, [])

  const getSalesList = useCallback((criteria) => {
    setIsLoading(true)
    fetchRequest(
      HttpMethods.GET,
      'sold',
      {},
      {
        customerPhone: criteria?.length > 2 ? criteria : undefined,
      }
    )
      .then(({ data, status }) => {
        if (status === 200) setSoldItems(data.result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const soldItemsList = useMemo(() => {
    return soldItems.map((soldItem) => (
      <button
        type="button"
        onClick={() => handleOpenModal(soldItem.product)}
        className="hover:bg-black/10 rounded-md list-none break-words flex text-start"
        key={soldItem.id}
      >
        <li className="w-50 pl-3">{soldItem.id}</li>
        <li className="w-50 pl-3">{soldItem.customerName}</li>
        <li className="w-50 pl-3">{soldItem.customerPhone}</li>
        <li className="w-50 pl-3">{soldItem.product.name}</li>
        <li className="w-50 pl-3">{soldItem.count}</li>
        <li className="w-50 pl-3">{soldItem.warranty} months</li>
        <li className="w-50 pl-3">{soldItem.price}</li>
      </button>
    ))
  }, [handleOpenModal, soldItems])

  useEffect(() => getSalesList(), [getSalesList])

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await getSalesList(criteria)
    }, 500)
  ).current

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  const handleSearch = async () => {
    const { value } = searchRef.current
    if (value.trim().length > 2) await debouncedSearch(value)
  }

  return (
    <>
      <section className="flex flex-col">
        <div className="flex w-4/5 justify-end">
          <LabeledInputComponent
            ref={searchRef}
            onChange={handleSearch}
            type="number"
            placeholder="Enter recipt number or phone number"
            className="w-[350px]"
          />
        </div>
        <div className="w-full">
          <div className="space-y-5 p-3">
            <ul className="flex text-xl">
              <li className="w-50 px-2">Reciept No</li>
              <li className="w-50 px-2">Customer name</li>
              <li className="w-50 px-2">Phone number</li>
              <li className="w-50 px-2">Product</li>
              <li className="w-50 px-2">Quantity</li>
              <li className="w-50 px-2">Warranty</li>
              <li className="w-50 px-2">Price</li>
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
      <Modal
        label="Details"
        title="Details:"
        showModal={showProduct}
        onClose={handleCloseModal}
      >
        <ProductDetailsComponent product={product} />
      </Modal>
    </>
  )
}
