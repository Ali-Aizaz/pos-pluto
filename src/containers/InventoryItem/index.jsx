import Image from 'next/image'

import { useCallback, useState } from 'react'

import {
  ButtonComponent,
  Cross,
  LabeledInputComponent,
  ProductDetailsComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import Modal from 'containers/Modal'
import fetchRequest from 'utils/fetchRequest'

const InventoryItem = ({ id, product, count, updateInventory }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState(0)

  const handleShowInput = useCallback(() => setShowInput(true), [])
  const handleHideInput = useCallback(() => setShowInput(false), [])

  const handleChangeValue = useCallback((e) => setValue(e.target.value), [])

  const deleteInventory = useCallback(() => {
    setIsLoading(true)

    fetchRequest(HttpMethods.DELETE, `inventory/${id}`)
      .then(() => updateInventory())
      .finally(() => {
        setIsLoading(false)
        setShowModal(false)
      })
  }, [id, updateInventory])

  const handleCloseProduct = useCallback(() => setShowProduct(false), [])

  const handleClose = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleOpen = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleShowProduct = useCallback(() => {
    setShowProduct(true)
  }, [])

  const handleUpdate = useCallback(() => {
    setIsLoading(true)
    fetchRequest(HttpMethods.PATCH, `inventory`, {
      id,
      count: parseInt(value, 10),
    })
      .then(() => updateInventory())
      .finally(() => {
        setShowInput(false)
        setIsLoading(false)
      })
  }, [id, updateInventory, value])

  return (
    <>
      <div key={id} className="flex space-x-2">
        <button
          onClick={() => handleShowProduct(product)}
          type="button"
          className="flex gap-x-7 [&>li]:list-none hover:bg-black/5 p-3 rounded-xl cursor-pointer text-start"
        >
          <li className="w-50">{product.name}</li>
          <li className="w-50">{product.categoryName}</li>
          {!showInput && <li className="w-50 px-2">{count}</li>}
        </button>
        {showInput && (
          <li className="list-none w-40">
            <LabeledInputComponent
              type="number"
              value={value}
              onChange={handleChangeValue}
            />
          </li>
        )}
        <li className="flex w-50 items-center space-x-6 list-none">
          {showInput ? (
            <>
              <ButtonComponent
                isLoading={isLoading}
                label="Update"
                onClick={handleUpdate}
                className="ml-12"
              />
              <button
                type="button"
                onClick={handleHideInput}
                className="border rounded-full aspect-square p-2  border-gray/40"
              >
                <Cross />
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={handleShowInput}>
                <Image src="/Edit.png" alt="edit" width={25} height={20} />
              </button>
              <button type="button" onClick={() => handleOpen(id)}>
                <Image src="/trash.png" alt="delete" width={20} height={20} />
              </button>
            </>
          )}
        </li>
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
      <Modal
        label="Details"
        title="Details:"
        showModal={showProduct}
        onClose={handleCloseProduct}
      >
        <ProductDetailsComponent product={product} />
      </Modal>
    </>
  )
}

export default InventoryItem
