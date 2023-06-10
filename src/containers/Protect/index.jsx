import { useRouter } from 'next/router'

import { useContext, useEffect } from 'react'

import { HttpMethods, PATHS } from 'configs/constants'
import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'
import fetchRequest from 'utils/fetchRequest'

const ProtectContainer = ({ children, isUnProtected }) => {
  const { userData, setUserData } = useContext(UserDataContext)

  const router = useRouter()

  useEffect(() => {
    fetchRequest(HttpMethods.GET, 'users/me')
      .then(({ data }) => {
        setUserData({ ...data, authorized: true })
        if (isUnProtected) router.push(PATHS.HOME)
      })
      .catch(() => {
        setUserData(INITIAL_USER_DATA)
        localStorage.removeItem('Pluto')
        router.push(PATHS.INDEX)
      })
  }, [isUnProtected, router, setUserData])

  if (userData.authorized) {
    if (!isUnProtected) return children
  } else if (isUnProtected) return children

  return null
}

export default ProtectContainer
