import React, { useCallback, useEffect, useState } from 'react'

import { Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const cols = ['name', 'id', 'role']

const ManageRoles = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [employees, setEmployees] = useState([])

  const getEmployees = useCallback(() => {
    setIsLoading(true)
    fetchRequest(HttpMethods.GET, 'users/employees')
      .then(({ data }) => {
        if (data.count > 0) setEmployees(data.result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => getEmployees(), [getEmployees])

  return (
    <div className="space-y-10 flex flex-col justify-center w-min">
      <ul className="flex text-2xl capitalize border-b-2 border-light-gray/10 py-2 font-semibold text-black/50 w-min">
        {cols.map((name) => (
          <li className="w-60 px-4" key={name}>
            {name}
          </li>
        ))}
      </ul>
      {employees.map((employee) => (
        <ul
          key={employee.id}
          className="flex items-center text-xl font-semibold text-black/90"
        >
          {cols.map((name) => (
            <li className="w-60 overflow-auto px-1" key={name}>
              {employee[name]}
            </li>
          ))}
        </ul>
      ))}
      {isLoading && (
        <div className="w-full flex justify-center">
          <Loading className="border-black/50 h-6 w-6" />
        </div>
      )}
    </div>
  )
}

export default ManageRoles
