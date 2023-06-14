import Image from 'next/image'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { LabeledInputComponent } from 'components'
import { HttpMethods } from 'configs/constants'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

export default function Manage() {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')

  const searchRef = useRef(null)

  const [inventoryList, setInventoryList] = useState([])

  const fetchSearch = useCallback(() => {
    fetchRequest(HttpMethods.GET, 'inventory').then(({ data, status }) => {
      if (status === 200 && data.count > 0) setInventoryList(data.result)
    })
  }, [])

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await fetchSearch(criteria)
    }, 300)
  ).current

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  const handleSearch = async () => {
    await debouncedSearch(searchRef.current?.value)
  }

  const productList = useMemo(
    () =>
      inventoryList.map(({ id, product, count }) => (
        <ul key={id} className="flex">
          <li className="w-50 ">{product.name}</li>
          <li className="w-50 ">{product.categoryName}</li>
          <li className="w-50 ">{count}</li>
          <li className="flex w-50 space-x-6 ">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button">
              <Image src="/trash.png" alt="edit" width={20} height={20} />
            </button>
          </li>
        </ul>
      )),
    [inventoryList]
  )

  return (
    <div className="w-full">
      <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
      <div className="mb-4 flex space-x-5 py-3">
        <LabeledInputComponent
          placeholder="Search for "
          ref={searchRef}
          onEdit={handleSearch}
          className="w-[350px]"
        />
        <LabeledInputComponent
          placeholder="Category "
          value={category}
          setValue={setCategory}
          className="w-[350px]"
        />
        <LabeledInputComponent
          placeholder="Name Search"
          value={name}
          setValue={setName}
          className="w-[350px]"
        />
      </div>
      <div className="space-y-5 border-t-2 p-3 ">
        <ul className="flex text-xl ">
          <li className="w-50">Product Name</li>
          <li className="w-50 ">Category</li>
          <li className="w-50 ">Quantity</li>
          <li className="w-50 ">Actions</li>
        </ul>
      </div>
      <div className="space-y-5 border-t-2 p-3 text-xl font-thin">
        {inventoryList.length > 0 && productList}
      </div>
    </div>
  )
}
