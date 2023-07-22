import Image from 'next/image'

export default function CartItemComponent({ item, onRemoveItem, index }) {
  return (
    <div className="flex w-11/12 justify-between rounded-3xl bg-white">
      <ul className="p-4 text-lg">
        <li>
          Product name: <strong>{item.product.name}</strong>
        </li>
        <li>
          Category: <strong>{item.categoryName}</strong>
        </li>
        <li>
          Quantity: <strong>{item.quantity}</strong>
        </li>
      </ul>
      <div className="flex flex-col items-end justify-between p-4">
        <button type="button" onClick={() => onRemoveItem(index)}>
          <Image
            src="/Trash.png"
            alt="remove from cart"
            width={30}
            height={40}
          />
        </button>
        <h2 className="text-lg font-bold">RS {item.price}</h2>
      </div>
    </div>
  )
}
