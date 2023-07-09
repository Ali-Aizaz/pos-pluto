import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { LabeledInputComponent, Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import InputListContainer from 'containers/InputList'
import InventoryItem from 'containers/InventoryItem'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

const Manage = () => {
  const searchRef = useRef(null)

  const [isLoading, setIsLoading] = useState(false)
  const [inventoryList, setInventoryList] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const fetchSearch = useCallback(
    (criteria) => {
      setIsLoading(true)
      fetchRequest(
        HttpMethods.GET,
        'inventory',
        {},
        {
          search: criteria,
          categoryName: selectedItem?.name,
        }
      )
        .then(({ data, status }) => {
          if (status === 200 && data.count > 0) setInventoryList(data.result)
        })
        .finally(() => setIsLoading(false))
    },
    [selectedItem?.name]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchSearch(), [])

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await fetchSearch(criteria)
    }, 500)
  ).current

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  const handleSearch = async () => {
    const { value } = searchRef.current
    if (value.trim().length > 2) await debouncedSearch(value)
  }

  const productList = useMemo(
    () =>
      inventoryList.map(({ id, product, count }) => (
        <InventoryItem
          id={id}
          key={id}
          product={product}
          count={count}
          updateInventory={fetchSearch}
        />
      )),
    [fetchSearch, inventoryList]
  )

  return (
    <div className="w-min">
      <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
      <div className="mb-4 flex items-end space-x-5 py-3">
        <LabeledInputComponent
          placeholder="Name Search"
          ref={searchRef}
          onEdit={handleSearch}
          className="w-76"
        />
        <InputListContainer
          setSelectedItem={setSelectedItem}
          placeholder="Category"
          url="category"
          className="w-76"
        />
      </div>
      <div className="space-y-5 text-gray font-medium border-y-2 border-silver p-3 ">
        <ul className="flex text-2xl gap-x-7">
          <li className="w-50">Product Name</li>
          <li className="w-50 ">Category</li>
          <li className="w-50 ">Quantity</li>
          <li className="w-50 ">Actions</li>
        </ul>
      </div>
      <div className="space-y-2 p-2 text-xl font-thin">
        {inventoryList.length > 0 && productList}
      </div>
      {isLoading && (
        <div className="flex w-full justify-center py-8">
          <Loading className="border-black w-8 h-8" />
        </div>
      )}
    </div>
  )
}

export default Manage
