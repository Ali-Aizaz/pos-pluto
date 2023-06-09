import { useRouter } from 'next/router'

import { useContext, useEffect } from 'react'

import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'
import { HttpMethods } from 'utils/constants'
import fetchRequest from 'utils/fetchRequest'

const ProtectContainer = ({ children, isUnProtected }) => {
  const { userData, setUserData } = useContext(UserDataContext)

  const router = useRouter()

  useEffect(() => {
    fetchRequest(HttpMethods.GET, 'users/me')
      .then(({ data }) => {
        setUserData({ ...data, authorized: true })
        if (isUnProtected) router.push('/home')
      })
      .catch(() => {
        setUserData(INITIAL_USER_DATA)
        localStorage.removeItem('Pluto')
        router.push('/')
      })
  }, [isUnProtected, router, setUserData])

  if (userData.authorized) {
    if (!isUnProtected) return children
  } else if (isUnProtected) return children

  return null
}

export default ProtectContainer
