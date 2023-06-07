'client'

import { useRouter } from 'next/router'

import { useContext, useEffect } from 'react'

import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'
import { HttpMethods } from 'utils/constants'
import fetchRequest from 'utils/fetchRequest'

const ProtectContainer = ({ children }) => {
  const { userData, setUserData } = useContext(UserDataContext)

  const router = useRouter()

  useEffect(() => {
    fetchRequest(HttpMethods.GET, 'users/me')
      .then(({ data }) => {
        setUserData({ ...data, authorized: true })
      })
      .catch(() => {
        setUserData(INITIAL_USER_DATA)
        localStorage.removeItem('Pluto')
        router.push('/')
      })
  }, [router, setUserData])

  return userData.authorized ? children : null
}

export default ProtectContainer
