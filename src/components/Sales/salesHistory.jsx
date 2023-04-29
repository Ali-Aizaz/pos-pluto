import { useState } from 'react'

import { LabeledInputComponent } from 'components'

export default function SalesHistory() {
  const [recipt, setRecipt] = useState('')

  return (
    <section className="flex flex-col">
      <div className="flex w-4/5 justify-end">
        <LabeledInputComponent
          value={recipt}
          setValue={setRecipt}
          placeholder="Enter recipt number or phone number"
          className="w-[350px]"
        />
      </div>
      <div className="w-full">
        <div className="space-y-5 p-3">
          <ul className="flex text-xl ">
            <li className="w-[200px]">Reciept No</li>
            <li className="w-[200px] ">Customer name</li>
            <li className="w-[200px] ">Phone number</li>
            <li className="w-[200px] ">Product</li>
            <li className="w-[200px] ">Quantity</li>
          </ul>
        </div>
        <div className="space-y-5 border-t-2 p-3 text-xl font-thin">
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
