/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { ArrowHeadIcon } from 'components/Icons'
import Loading from 'components/Loading'
import { HttpMethods } from 'configs/constants'
import debounce from 'lodash.debounce'
import fetchRequest from 'utils/fetchRequest'

const InputListComponent = ({ label, className, url, ...restProps }) => {
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef(null)

  const [list, setList] = useState([])

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

  return (
    <div className={classNames('flex flex-col relative', className)}>
      <h2 className="mb-2 text-xl text-text-gray">{label}</h2>
      <div className="flex w-full relative">
        <input
          ref={searchRef}
          {...restProps}
          onChange={handleSearch}
          className="rounded-xl bg-bg-gray p-3 outline-none w-full"
        />
        {isLoading ? (
          <Loading className="absolute border-black/50 h-4 w-4 right-4 top-4" />
        ) : (
          <ArrowHeadIcon className="absolute border-black/50 h-4 w-4 right-4 top-4" />
        )}
      </div>
      {list && list.length > 0 && (
        <ul className="absolute mt-16 bg-white overflow-hidden w-full text-xl rounded-xl border border-silver shadow-md">
          {list.map((item) => (
            <li
              key={item.id}
              className="border-b p-3 cursor-pointer hover:bg-silver border-silver last:border-b-0 line-clamp-1"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InputListComponent
