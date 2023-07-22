import React, { useCallback, useEffect, useState } from 'react'

import { ButtonComponent, Loading } from 'components'
import { HttpMethods } from 'configs/constants'
import Modal from 'containers/Modal'
import fetchRequest from 'utils/fetchRequest'

const cols = ['name', 'id', 'role']

const ManageRoles = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [employees, setEmployees] = useState([])
  const [ID, setID] = useState(null)

  const handleClose = useCallback(() => setShowModal(false), [])

  const handleOpen = useCallback((id) => {
    setID(id)
    setShowModal(true)
  }, [])

  const getEmployees = useCallback(() => {
    setIsLoading(true)
    fetchRequest(HttpMethods.GET, 'users/employees')
      .then(({ data }) => {
        if (data.count > 0) setEmployees(data.result)
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => getEmployees(), [getEmployees])

  const removeEmployee = useCallback(() => {
    setIsLoading(true)

    fetchRequest(HttpMethods.DELETE, `users/employees/${ID}`)
      .then(() => setEmployees(employees.filter(({ id }) => id !== ID)))
      .finally(() => {
        setIsLoading(false)
        setShowModal(false)
      })
  }, [ID, employees])

  return (
    <>
      <div className="space-y-10 flex flex-col justify-center w-min max-h-[600px] overflow-y-auto">
        <ul className="flex text-2xl capitalize border-b-2 border-light-gray/10 py-2 font-semibold text-black/50 w-min">
          {cols.map((name) => (
            <li className="w-60 px-4" key={name}>
              {name}
            </li>
          ))}
          <li className="w-60 px-4">Action</li>
        </ul>
        {employees.map((employee) => (
          <ul
            key={employee.id}
            className="flex items-center text-xl space-x-5 font-semibold text-black/90"
          >
            {cols.map((name) => (
              <li className="w-50 overflow-auto px-5 break-words" key={name}>
                {employee[name]}
              </li>
            ))}
            <ButtonComponent
              label="remove"
              className="!ml-20 !pt-2"
              onClick={() => handleOpen(employee.id)}
            />
          </ul>
        ))}
        {isLoading && (
          <div className="w-full flex justify-center">
            <Loading className="border-black/50 h-6 w-6" />
          </div>
        )}
      </div>
      <Modal showModal={showModal} onClose={handleClose}>
        <h1 className="text-center p-3 mb-3 text-xl font-medium">
          Are you sure you want to delete this employee from your store?
        </h1>
        <ButtonComponent
          label="Delete"
          onClick={removeEmployee}
          isLoading={isLoading}
        />
      </Modal>
    </>
  )
}

export default ManageRoles
