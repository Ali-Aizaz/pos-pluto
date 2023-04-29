import { useRouter } from 'next/router'

import { useState } from 'react'

import {
  LabeledInputComponent,
  SalesItemComponent,
  SubmitResetButtonComponent,
} from 'components'

export default function Order() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const router = useRouter()
  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
    router.push('/home')
  }

  const handleReset = () => {}
  return (
    <div className="flex">
      <form className="flex w-full flex-col" onSubmit={handleUpdate}>
        <div className="mb-4 flex w-full flex-col gap-y-5 text-lg font-medium">
          <h2 className="text-xl text-gray">Customer Details:</h2>

          <LabeledInputComponent
            value={name}
            setValue={setName}
            placeholder="Name"
            className="w-[350px]"
          />
          <LabeledInputComponent
            value={phone}
            setValue={setPhone}
            placeholder="Phone Number"
            className="w-[350px]"
          />
        </div>
        <div className="mb-4 flex w-full flex-col gap-y-5 text-lg font-medium">
          <h2 className="text-3xl text-gray">Product Details:</h2>

          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Product Category"
            className="w-[350px]"
          />
          <LabeledInputComponent
            value={productName}
            setValue={setProductName}
            placeholder="Product Name"
            className="w-[350px]"
          />
          <div className="flex space-x-4">
            <LabeledInputComponent
              value={quantity}
              setValue={setQuantity}
              placeholder="Quantity"
              className="w-[150px]"
            />
            <div className="flex flex-col gap-y-1  text-white">
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="bg-green-600 aspect-square h-5 w-10 rounded-full pb-9 text-center text-2xl"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setQuantity((value) => value - 1)}
                className="bg-red-600 aspect-square  h-5 w-10 rounded-full pb-9 text-2xl"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <SubmitResetButtonComponent onReset={handleReset} />
      </form>
      <div className="flex flex-col items-center space-y-5">
        <div className="ml-10 flex h-[60vh] w-[400px] flex-col items-center space-y-5 overflow-y-auto rounded-3xl bg-[#E3E0E0] py-5">
          <SalesItemComponent />
          <SalesItemComponent />
          <SalesItemComponent />
          <SalesItemComponent />
        </div>
        <button
          type="button"
          className="w-[200px] rounded-2xl bg-black p-4 text-xl font-medium text-white"
        >
          Check - OUT
        </button>
      </div>
    </div>
  )
}