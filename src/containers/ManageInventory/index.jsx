import Image from 'next/image'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  ButtonComponent,
  LabeledInputComponent,
  Loading,
  ProductDetailsComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import InputListContainer from 'containers/InputList'
import Modal from 'containers/Modal'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

export default function Manage() {
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)

  const [inventoryList, setInventoryList] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [showProduct, setShowProduct] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [ID, setID] = useState(null)

  const handleCloseProduct = useCallback(() => setShowProduct(false), [])

  const handleShowProduct = useCallback((product) => {
    setSelectedItem(product)
    setShowProduct(true)
  }, [])

  const handleClose = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleOpen = useCallback((id) => {
    setID(id)
    setShowModal(true)
  }, [])

  const deleteInventory = useCallback(() => {
    setIsLoading(true)

    fetchRequest(HttpMethods.DELETE, `inventory/${ID}`)
      .then(() => setInventoryList(inventoryList.filter(({ id }) => id !== ID)))
      .finally(() => {
        setIsLoading(false)
        setShowModal(false)
      })
  }, [ID, inventoryList])

  const fetchSearch = useCallback(
    (criteria) => {
      setIsLoading(true)
      fetchRequest(
        HttpMethods.GET,
        'inventory',
        {},
        {
          search: criteria,
          categoryName: selectedItem?.name,
        }
      )
        .then(({ data, status }) => {
          if (status === 200 && data.count > 0) setInventoryList(data.result)
        })
        .finally(() => setIsLoading(false))
    },
    [selectedItem?.name]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchSearch(), [])

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await fetchSearch(criteria)
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

  const productList = useMemo(
    () =>
      inventoryList.map(({ id, product, count }) => (
        <button
          onClick={() => handleShowProduct(product)}
          type="button"
          key={id}
          className="flex gap-x-7 hover:bg-black/5 p-3 rounded-xl cursor-pointer text-start"
        >
          <li className="w-50 list-none">{product.name}</li>
          <li className="w-50 list-none">{product.categoryName}</li>
          <li className="w-50 px-2 list-none">{count}</li>
          <li className="flex w-50 space-x-6 list-none">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button" onClick={() => handleOpen(id)}>
              <Image src="/trash.png" alt="delete" width={20} height={20} />
            </button>
          </li>
        </button>
      )),
    [handleOpen, handleShowProduct, inventoryList]
  )

  return (
    <>
      <div className="w-min">
        <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
        <div className="mb-4 flex items-end space-x-5 py-3">
          <LabeledInputComponent
            placeholder="Name Search"
            ref={searchRef}
            onEdit={handleSearch}
            className="w-76"
          />
          <InputListContainer
            setSelectedItem={setSelectedItem}
            placeholder="Category"
            url="category"
            className="w-76"
          />
        </div>
        <div className="space-y-5 text-gray font-medium border-y-2 border-silver p-3 ">
          <ul className="flex text-2xl gap-x-7">
            <li className="w-50">Product Name</li>
            <li className="w-50 ">Category</li>
            <li className="w-50 ">Quantity</li>
            <li className="w-50 ">Actions</li>
          </ul>
        </div>
        <div className="space-y-2 p-2 text-xl font-thin">
          {inventoryList.length > 0 && productList}
        </div>
        {isLoading && (
          <div className="flex w-full justify-center py-8">
            <Loading className="border-black w-8 h-8" />
          </div>
        )}
      </div>
      <Modal showModal={showModal} onClose={handleClose}>
        <h1 className="text-center p-3 mb-3 text-xl font-medium">
          Are you sure you want to delete this product from your inventory?
        </h1>
        <ButtonComponent
          label="Delete"
          onClick={deleteInventory}
          isLoading={isLoading}
        />
      </Modal>
      <Modal showModal={showProduct} onClose={handleCloseProduct}>
        <ProductDetailsComponent product={selectedItem} />
      </Modal>
    </>
  )
}
