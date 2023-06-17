import { useState } from 'react'

import {
  LabeledInputComponent,
  ProductComponent,
  SubmitResetButtonComponent,
} from 'components'
import InputListContainer from 'containers/InputList'

export default function Add() {
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState(null)
  const [quantity, setQuantity] = useState('')
  const [warranty, setWarranty] = useState('')

  const handleReset = () => {
    setProduct(null)
    setCategory(null)
    setQuantity('')
    setWarranty('')
  }

  return (
    <form>
      <div className="flex w-full flex-col gap-y-7 py-4 text-lg font-medium">
        <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
        <div className="mb-4 flex space-x-5 py-3">
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
        </div>
        <ProductComponent display product={product} />
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-7 border-t-4 py-4 text-lg font-medium">
        <h2 className="text-2xl text-gray">Product details:</h2>
        <LabeledInputComponent
          value={quantity}
          onEdit={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          className="w-[400px]"
        />
        <div className="flex ">
          <LabeledInputComponent
            value={warranty}
            onEdit={(e) => setWarranty(e.target.value)}
            placeholder="Warranty"
            className="w-[120px]"
          />
          <button type="button" className="translate-x-2 text-2xl">
            Months
          </button>
        </div>
      </div>
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  )
}
