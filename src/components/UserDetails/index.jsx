import React from 'react'

import ButtonComponent from 'components/Button'

function UserDetails({
  price,
  warranty,
  product,
  customerName,
  customerPhone,
  createdAt,
  onReturn,
  isLoading,
}) {
  return (
    <section className="flex flex-col items-center border border-black/10 rounded-xl p-3">
      <div className="ml-5 flex max-h-100 w-76 flex-col items-center font-medium overflow-y-scroll scrollbar-track-transparent">
        <div className="bg-theme-light-black/40 w-full p-2">
          <h1 className="text-xl text-black ">{customerName}</h1>
          <h2 className="text-theme-purple text-xl">Name</h2>
        </div>
        <div className="bg-theme-light-black/20 w-full p-2">
          <h1 className="text-xl text-black ">{customerPhone}</h1>
          <h2 className="text-theme-purple text-xl">Phone number</h2>
        </div>
        <div className="bg-theme-light-black/30 w-full p-2">
          <h1 className="text-xl text-black ">{Date(createdAt)}</h1>
          <h2 className="text-theme-purple text-xl">Date of sales</h2>
        </div>
        <div className="bg-theme-light-black/20 w-full p-2">
          <h1 className="text-xl text-black ">{warranty} months</h1>
          <h2 className="text-theme-purple text-xl">Warranty</h2>
        </div>
        <div className="bg-theme-purple/40 w-full p-2">
          <h1 className="text-xl text-black ">{price}</h1>
          <h2 className="text-theme-purple text-xl">Product Price</h2>
        </div>
        {product &&
          Object.keys(product.details).map((key) => (
            <div key={key} className="bg-theme-purple/40 w-full p-2">
              <h1 className="text-xl text-black ">{product.details[key]}</h1>
              <h2 className="text-theme-purple text-xl">{key}</h2>
            </div>
          ))}
      </div>
      <ButtonComponent
        onClick={onReturn}
        isLoading={isLoading}
        className="w-full bg-black hover:bg-black/80"
        label="Return "
      />
    </section>
  )
}

export default UserDetails
