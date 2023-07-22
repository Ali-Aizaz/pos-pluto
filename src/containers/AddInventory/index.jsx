import { useCallback, useEffect, useRef, useState } from 'react'
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
import ProductTable from 'containers/ProductTable'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'
import { InventorySchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

export default function Add() {
  const searchRef = useRef()
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [productList, setProductList] = useState([])
  const handleCloseModal = useCallback(() => setShowModal(false), [])
  const [product, setProduct] = useState(null)

  const handleOpenModal = useCallback(() => setShowModal(true), [])

  const fetchSearch = useCallback(
    (criteria) => {
      setIsLoading(true)
      fetchRequest(
        HttpMethods.GET,
        'products',
        {},
        {
          search: criteria,
          category: category?.name,
        }
      )
        .then(({ data, status }) => {
          if (status === 200 && data.count > 0) setProductList(data.result)
        })
        .finally(() => setIsLoading(false))
    },
    [category?.name]
  )

  useEffect(() => {
    fetchSearch()
  }, [category, fetchSearch])

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

  const handleProduct = useCallback((item) => {
    setProduct(item)
  }, [])

  const handleReset = useCallback(() => {
    setProduct(null)
    setCategory(null)
    reset()
  }, [reset])

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

  const handleSearch = async () => {
    const { value } = searchRef.current
    if (value.trim().length > 2) await debouncedSearch(value)
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(handleAddProduct)}>
        {product ? (
          <>
            <h2 className="text-2xl text-gray ">Product details:</h2>
            <ProductComponent display product={product} />
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
          </>
        ) : (
          <div className="flex w-full flex-col gap-y-4 py-4 text-lg font-medium">
            <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
            <div className="mb-4 items-center flex space-x-5 py-3">
              <LabeledInputComponent
                ref={searchRef}
                onChange={handleSearch}
                placeholder="Product Name"
                className="w-76 translate-y-1"
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
            <ProductTable
              handleProduct={handleProduct}
              productList={productList}
              isLoading={isLoading}
            />
          </div>
        )}
      </form>
      <Modal onClose={handleCloseModal} showModal={showModal}>
        <AddProduct onClose={handleCloseModal} />
      </Modal>
    </>
  )
}
