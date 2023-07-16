import Image from 'next/image'

import { useCallback, useEffect, useState } from 'react'

import { ButtonComponent, LabeledInputComponent } from 'components'
import InputListContainer from 'containers/InputList'

const AddProduct = () => {
  const [text, setText] = useState('')
  const [nextStep, setNextStep] = useState(false)
  const [category, setCategory] = useState(null)
  const [field, setField] = useState('')
  const [value, setValue] = useState('')

  const [newProduct, setNewProduct] = useState({
    name: '',
    details: {},
  })

  const handleField = useCallback((event) => setField(event.target.value), [])
  const handleValue = useCallback((event) => setValue(event.target.value), [])

  const handleSelect = useCallback(() => {
    setCategory({ name: text, categoryData: [] })
    setNextStep(true)
  }, [text])

  const handleAdd = useCallback(() => {
    setNewProduct((val) => {
      return { name: val.name, details: { ...val.details, [field]: value } }
    })
    setField('')
    setValue('')
  }, [field, value])

  useEffect(() => {
    if (category) setNextStep(true)
  }, [category])

  return nextStep ? (
    <form className="flex flex-col space-y-3">
      <div className=" bg-grayLight border-light-gray flex w-[110px] flex-col items-center space-y-3 rounded-2xl border border-dashed p-2 text-center">
        <div className="w-6">
          <Image
            src="/gallery-add.png"
            alt="add to gallery"
            width={400}
            height={400}
          />
        </div>
        <h1 className="text-sm font-semibold text-light-gray">
          Upload Company logo
        </h1>
      </div>
      <LabeledInputComponent placeholder="name" />
      {category && category.categoryData.lenght > 0 ? (
        category.categoryData.map((val) => (
          <LabeledInputComponent key={val} placeholder={val} />
        ))
      ) : (
        <div>
          <h1 className="text-lg font-medium text-black/90">Details: </h1>
          {Object.keys(newProduct.details).map((val) => (
            <div key={val}>
              {val} : {newProduct.details[val]}
            </div>
          ))}
          <div className="flex space-x-2 items-center">
            <LabeledInputComponent
              onChange={handleField}
              defaultValue={field}
              placeholder="field"
            />
            <LabeledInputComponent
              onChange={handleValue}
              defaultValue={value}
              placeholder="value"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="border h-7 border-black/20 text-black/60 font-medium rounded-lg translate-y-0.5 px-1"
            >
              Add
            </button>
          </div>
        </div>
      )}
      <ButtonComponent
        onClick={handleSelect}
        label="Select Category"
        className="w-full"
      />
    </form>
  ) : (
    <div className="space-y-3 flex flex-col justify-between overflow-y-auto px-1">
      <InputListContainer
        setSelectedItem={setCategory}
        placeholder="Category"
        setText={setText}
        url="category"
      />
      <ButtonComponent
        onClick={handleSelect}
        label="Select Category"
        className="w-full"
      />
    </div>
  )
}

export default AddProduct
