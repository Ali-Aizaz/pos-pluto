import Image from 'next/image'

import { useState } from 'react'

import { LabeledInputComponent, UserDetailsComponent } from 'components'

export default function Return() {
  const [recipt, setRecipt] = useState('')
  return (
    <section className="text-gray">
      <LabeledInputComponent
        value={recipt}
        setValue={setRecipt}
        placeholder="Enter recipt number or phone number"
        extraCss="w-[350px]"
      />
      <div className="flex justify-between">
        <div className="w-full">
          <div className="mt-10 space-y-5 border-t-2 p-3">
            <h1 className="text-base font-medium ">Sales Details: </h1>
            <ul className="flex text-xl ">
              <li className="w-[150px]">Product name</li>
              <li className="w-[150px] ">Warranty</li>
              <li className="w-[150px] ">Quantity</li>
              <li className="w-[150px] ">Actions</li>
            </ul>
          </div>
          <div className="mt-3 space-y-5 border-t-2 p-3 text-xl font-thin">
            <ul className="flex  ">
              <li className="w-[150px] ">Stove</li>
              <li className="w-[150px] ">12 months</li>
              <li className="w-[150px] ">5</li>
              <li className="w-[150px] ">
                <Image src="/return.png" alt="return" width={30} height={40} />
              </li>
            </ul>
          </div>
        </div>
        <UserDetailsComponent />
      </div>
    </section>
  )
}
