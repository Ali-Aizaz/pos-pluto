import { useState } from 'react'

import { LabeledInputComponent, SubmitResetButtonComponent } from 'components'

export default function Add() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  // const handleAddProduct = (e) => {
  //   e.preventDefault();
  //   console.log('update');
  //   router.push('/home');
  // };

  const handleReset = () => {}

  return (
    <form>
      <div className="flex w-full flex-col gap-y-7 py-4 text-lg font-medium">
        <h2 className="text-2xl text-gray">Product details:</h2>

        <LabeledInputComponent
          value={name}
          setValue={setName}
          placeholder="name"
          extraCss="w-[400px]"
        />
        <div className="flex ">
          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Category"
            extraCss="w-[400px]"
          />
          <button
            type="button"
            className="-translate-y-1 translate-x-2 text-5xl"
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-7 border-t-4 py-4 text-lg font-medium">
        <h2 className="text-2xl text-gray">Product details:</h2>

        <LabeledInputComponent
          value={name}
          setValue={setName}
          placeholder="Quantity"
          extraCss="w-[400px]"
        />
        <div className="flex ">
          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Warranty"
            extraCss="w-[120px]"
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
