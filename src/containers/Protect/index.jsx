import { useRouter } from 'next/router'

import { useContext, useEffect } from 'react'

import { Loading } from 'components'
import { HttpMethods, PATHS } from 'configs/constants'
import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'
import fetchRequest from 'utils/fetchRequest'

const ProtectContainer = ({ children, isUnProtected }) => {
  const { userData, setUserData } = useContext(UserDataContext)

  const router = useRouter()

  useEffect(() => {
    const localData = localStorage.getItem('Pluto') || '{}'
    const { token } = JSON.parse(localData)

    if (token && token !== '')
      fetchRequest(HttpMethods.GET, 'users/me')
        .then(({ data, status }) => {
          if (status === 200) {
            setUserData({ ...data, authorized: true })
            if (isUnProtected) router.push(PATHS.HOME)
          }
        })
        .catch(() => {
          setUserData(INITIAL_USER_DATA)
          localStorage.removeItem('Pluto')
          router.push(PATHS.INDEX)
        })
    else if (!isUnProtected) router.push(PATHS.INDEX)
  }, [isUnProtected, router, setUserData])

  if (userData.authorized) {
    if (!isUnProtected) return children
  } else if (isUnProtected) return children

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loading className="border-black/90 w-8 h-8" />
    </div>
  )
}

export default ProtectContainer
