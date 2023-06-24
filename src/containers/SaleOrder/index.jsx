import { useCallback, useState } from 'react'

import {
  CartItemComponent,
  LabeledInputComponent,
  Loading,
  ProductComponent,
  SubmitResetButtonComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import InputListContainer from 'containers/InputList'
import fetchRequest from 'utils/fetchRequest'

export default function Order() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState(null)
  const [inventory, setInventory] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [cartList, setCartList] = useState([])

  const handleCount = useCallback((event) => {
    setQuantity(event.target.value)
  }, [])

  const handleName = useCallback((event) => {
    setName(event.target.value)
  }, [])

  const handlePhone = useCallback((event) => {
    setPhone(event.target.value)
  }, [])

  const handleRemoveItem = useCallback(
    (val) => {
      setCartList(cartList.filter((s, i) => i !== val))
    },
    [cartList]
  )

  const handleReset = useCallback(() => {
    setName('')
    setPhone('')
    setCartList([])
    setInventory(null)
    setCategory(null)
    setQuantity(0)
  }, [])

  const handleCart = useCallback(
    (event) => {
      event.preventDefault()

      if (!inventory) return setError('Invalid product selected')

      if (inventory.count < quantity || quantity < 1)
        return setError('invalid product quantity')

      const oldItem = cartList.find((i) => i.id === inventory.id)
      if (oldItem && oldItem.quantity + quantity <= oldItem.count)
        return setError('Insuffience product quantity')
      if (oldItem) {
        setCartList([
          ...cartList.filter((s) => s.id !== inventory.id),
          { quantity: quantity + oldItem.quantity, ...inventory },
        ])
      } else setCartList((x) => [...x, { quantity, ...inventory }])

      setInventory(null)
      setCategory(null)
      setQuantity(0)
      setError('')
      return null
    },
    [cartList, inventory, quantity]
  )

  const handleCheckOut = useCallback(() => {
    if (cartList.length < 1) return setError('No items in cart')

    setIsLoading(true)
    fetchRequest(HttpMethods.POST, 'inventory', {
      name,
      phone,
      inventoryData: cartList.map((item) => {
        return {
          id: item.id,
          count: item.quantity,
          price: item.price,
          warranty: item.warranty,
          productId: item.productId,
        }
      }),
    })
      .then(() => handleReset())
      .finally(() => setIsLoading(false))
    return null
  }, [cartList, handleReset, name, phone])

  return (
    <div className="flex justify-between">
      <form className="flex flex-col" onSubmit={handleCart}>
        <div className="mb-4 flex w-full flex-col gap-y-5 text-lg font-medium">
          <h2 className="text-xl text-gray">Customer Details:</h2>

          <LabeledInputComponent
            value={name}
            id="name"
            onChange={handleName}
            placeholder="Name"
            className="w-76"
          />
          <LabeledInputComponent
            value={phone}
            id="phone"
            onChange={handlePhone}
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
        <div className="text-sm font-semibold text-red">{error}</div>
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
          id="checkout"
          name="checkout"
          onClick={handleCheckOut}
          disabled={isLoading}
          type="button"
          className="w-[200px] rounded-2xl bg-black p-4 text-xl font-medium text-white"
        >
          {isLoading ? <Loading /> : 'Check Out'}
        </button>
      </div>
    </div>
  )
}
