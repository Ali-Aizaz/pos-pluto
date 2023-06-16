import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import classNames from 'classnames'
import { ArrowHeadIcon } from 'components/Icons'
import Loading from 'components/Loading'
import { HttpMethods } from 'configs/constants'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

const InputListComponent = ({
  label,
  className,
  url,
  setSelectedItem,
  ...restProps
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)

  const [list, setList] = useState([])

  const handleSelectItem = useCallback(
    (item) => {
      setSelectedItem(item)
      setList([])
    },
    [setSelectedItem]
  )

  const fetchSearch = useCallback(
    (criteria) => {
      setIsLoading(true)
      fetchRequest(
        HttpMethods.GET,
        url,
        { limit: 6 },
        {
          search: criteria,
        }
      )
        .then(({ data, status }) => {
          if (status === 200 && data.count > 0) setList(data.result)
        })
        .finally(() => setIsLoading(false))
    },
    [url]
  )

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
    const { value } = searchRef.current
    if (value.trim().length > 2) await debouncedSearch(value)
  }

  const dropList = useMemo(
    () =>
      list.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => handleSelectItem(item)}
            type="button"
            className="border-b p-3 w-full text-left hover:bg-silver border-silver last:border-b-0 line-clamp-1"
          >
            {item.name}
          </button>
        </li>
      )),
    [list, handleSelectItem]
  )

  return (
    <div className={classNames('flex flex-col relative', className)}>
      <h2 className="mb-2 text-xl text-text-gray">{label}</h2>
      <div className="flex w-full relative">
        <input
          ref={searchRef}
          {...restProps}
          onChange={handleSearch}
          className="rounded-xl bg-grayLight p-3 outline-none w-full"
        />
        {isLoading ? (
          <Loading className="absolute border-black/50 !border-2 h-4 w-4 right-4 top-4" />
        ) : (
          <ArrowHeadIcon className="absolute border-black/50 h-4 w-4 right-4 top-4" />
        )}
      </div>
      <ul
        className={classNames(
          {
            'max-h-100 border': list && list.length > 0,
            'max-h-0': !list || list.length < 1,
          },
          'absolute mt-16 bg-white transition-maxHeight overflow-hidden w-full text-xl rounded-xl border-silver shadow-md'
        )}
      >
        {dropList}
      </ul>
    </div>
  )
}

export default InputListComponent
