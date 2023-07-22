import { useRouter } from 'next/router'

import { useCallback, useContext, useEffect, useState } from 'react'

import { Loading } from 'components'
import { HttpMethods, PATHS, PROTECTED } from 'configs/constants'
import UserDataContext, { INITIAL_USER_DATA } from 'context/userData'
import fetchRequest from 'utils/fetchRequest'

const ProtectContainer = ({ children }) => {
  const { userData, setUserData } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { asPath } = router
  const { code } = router.query

  const isProtected = !!PROTECTED.find((val) => asPath.startsWith(val))

  const getUser = useCallback(() => {
    const localData = localStorage.getItem('Pluto') || '{}'
    const { token } = JSON.parse(localData)

    if (token && token !== '')
      fetchRequest(HttpMethods.GET, 'users/me')
        .then(({ data, status }) => {
          if (status === 200) {
            setUserData({ ...data, authorized: true })
            if (!isProtected) router.push(PATHS.HOME)
          } else if (status === 401) {
            setUserData(INITIAL_USER_DATA)
            localStorage.removeItem('Pluto')
            router.push(PATHS.INDEX)
          }
        })
        .finally(() => setIsLoading(false))
    else if (isProtected) {
      router.push(PATHS.INDEX)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [isProtected, router, setUserData])

  const getGoogleUser = useCallback(() => {
    fetchRequest(
      HttpMethods.GET,
      `/users/google/${new URLSearchParams(code).toString()}`
    ).finally(() => {
      router.push('/home')
    })
  }, [code, router])

  useEffect(() => {
    if (code) {
      getGoogleUser()
    }
  }, [code, getGoogleUser])

  useEffect(() => {
    getUser()
  }, [getUser])

  if (userData.authorized) {
    if (isProtected) return children
  } else if (!isProtected && !isLoading) return children

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loading className="border-black/90 w-8 h-8" />
    </div>
  )
}

export default ProtectContainer
