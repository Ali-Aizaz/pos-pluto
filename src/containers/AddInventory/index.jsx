import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  ButtonComponent,
  LabeledInputComponent,
  ProductComponent,
  SubmitResetButtonComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import AddProduct from 'containers/AddProduct'
import InputListContainer from 'containers/InputList'
import Modal from 'containers/Modal'
import fetchRequest from 'utils/fetchRequest'
import { InventorySchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

export default function Add() {
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => setShowModal(false), [])

  const handleOpenModal = useCallback(() => setShowModal(true), [])

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InventorySchema),
    mode: 'onBlur',
    defaultValues: {
      price: 0,
      count: 0,
      warranty: 0,
    },
  })

  const handleReset = useCallback(() => {
    setProduct(null)
    setCategory(null)
    reset()
  }, [reset])

  const handleAddProduct = useCallback(
    ({ price, count, warranty }) => {
      if (product?.id) {
        setIsLoading(true)
        fetchRequest(HttpMethods.POST, 'inventory', {
          price,
          count,
          warranty,
          productId: product.id,
        })
          .then(() => handleReset())
          .finally(() => setIsLoading(false))
      }
    },
    [handleReset, product?.id]
  )

  return (
    <>
      <form
        className="space-y-4 max-h-screen overflow-auto"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="flex w-full flex-col gap-y-4 border-b-4 border-gray py-4 text-lg font-medium">
          <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
          <div className="mb-4 items-center flex space-x-5 py-3">
            <InputListContainer
              setSelectedItem={setProduct}
              placeholder="Product Name"
              url={`products${
                category?.name !== undefined
                  ? `?categoryName=${category.name}`
                  : ''
              }`}
              className="w-76"
            />
            <InputListContainer
              setSelectedItem={setCategory}
              placeholder="Category"
              url="category"
              className="w-76"
            />
            <ButtonComponent
              onClick={handleOpenModal}
              label="create product"
              className="h-14 translate-y-1"
            />
          </div>
          {product && <ProductComponent display product={product} />}
        </div>
        <h2 className="text-2xl text-gray ">Product details:</h2>
        <div className="mt-10 flex w-full gap-x-7 py-4 text-lg font-medium">
          <LabeledInputComponent
            id="price"
            placeholder="Price"
            type="number"
            label="Price"
            required
            error={errors.price}
            {...register('price')}
            className="w-100"
          />
          <LabeledInputComponent
            id="count"
            placeholder="Quantity"
            label="Quantity"
            type="number"
            required
            error={errors.count}
            {...register('count')}
            className="w-100"
          />
        </div>
        <div className="flex items-center">
          <LabeledInputComponent
            id="warranty"
            placeholder="Warranty"
            label="Warranty"
            type="number"
            error={errors.warranty}
            {...register('warranty')}
            className="w-40 font-medium text-xl"
          />
          <button
            type="button"
            className="translate-x-2 translate-y-4 text-2xl"
          >
            Months
          </button>
        </div>
        <SubmitResetButtonComponent
          label="Update Inventory"
          onReset={handleReset}
          isLoading={isLoading}
        />
      </form>
      <Modal onClose={handleCloseModal} showModal={showModal}>
        <AddProduct />
      </Modal>
    </>
  )
}
