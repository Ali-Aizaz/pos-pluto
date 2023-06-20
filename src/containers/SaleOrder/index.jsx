import { useCallback, useState } from 'react'

import {
  CartItemComponent,
  LabeledInputComponent,
  ProductComponent,
  SubmitResetButtonComponent,
} from 'components'
import InputListContainer from 'containers/InputList'

export default function Order() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(null)
  const [inventory, setInventory] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const [cartList, setCartList] = useState([])

  const handleCount = useCallback((event) => {
    setQuantity(event.target.value)
  }, [])

  const handleRemoveItem = useCallback(
    (val) => {
      setCartList(cartList.filter((s, i) => i !== val))
    },
    [cartList]
  )

  const handleCart = useCallback(
    (event) => {
      event.preventDefault()
      if (inventory !== null && inventory.count >= quantity > 0) {
        const oldItem = cartList.find((i) => i.id === inventory.id)
        if (oldItem) {
          setCartList([
            ...cartList.filter((s) => s.id !== inventory.id),
            { quantity: quantity + oldItem.quantity, ...inventory },
          ])
        } else setCartList((x) => [...x, { quantity, ...inventory }])
        setInventory(null)
        setCategory(null)
        setQuantity(0)
      }
    },
    [cartList, inventory, quantity]
  )

  const handleReset = () => {}
  return (
    <div className="flex justify-between">
      <form className="flex flex-col" onSubmit={handleCart}>
        <div className="mb-4 flex w-full flex-col gap-y-5 text-lg font-medium">
          <h2 className="text-xl text-gray">Customer Details:</h2>

          <LabeledInputComponent
            value={name}
            id="name"
            setValue={setName}
            placeholder="Name"
            className="w-76"
          />
          <LabeledInputComponent
            value={phone}
            id="phone"
            setValue={setPhone}
            placeholder="Phone Number"
            className="w-76"
          />
        </div>
        <div className="mb-4 flex w-full flex-col gap-y-5 text-lg font-medium">
          <h2 className="text-3xl text-gray">Product Details:</h2>
          <InputListContainer
            setSelectedItem={setCategory}
            placeholder="Category"
            url="category"
            className="w-76"
          />
          <InputListContainer
            setSelectedItem={setInventory}
            placeholder="Product Name"
            listField="product"
            url={`inventory${
              category?.name !== undefined
                ? `?categoryName=${category.name}`
                : ''
            }`}
            className="w-76"
          />
          <div className="flex space-x-4">
            <LabeledInputComponent
              value={quantity}
              id="count"
              onChange={handleCount}
              placeholder="Quantity"
              type="number"
              className="w-36"
            />
            <div className="flex flex-col translate-y-1 gap-y-2 text-white">
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="w-10 h-5 rounded-full bg-green"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setQuantity((value) => value - 1)}
                className="w-10 h-5 rounded-full bg-red"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <SubmitResetButtonComponent label="Add to Cart" onReset={handleReset} />
      </form>
      <div className="i">
        {inventory && (
          <ProductComponent
            display
            product={inventory.product}
            count={inventory.count}
          />
        )}
      </div>
      <div className="flex flex-col items-center space-y-5">
        <div className="ml-10 flex h-[60vh] w-[400px] flex-col items-center space-y-5 overflow-y-auto rounded-3xl bg-[#E3E0E0] py-5">
          {cartList.map((item, idx) => (
            <CartItemComponent
              index={idx}
              key={item.id}
              item={item}
              onRemoveItem={handleRemoveItem}
            />
          ))}
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
