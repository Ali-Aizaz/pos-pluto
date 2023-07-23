import Image from 'next/image'

import { useCallback } from 'react'

import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

const GoogleAuth = () => {
  const handleGoogle = useCallback(() => {
    fetchRequest(HttpMethods.GET, 'auth/google').then(({ data }) => {
      window.location.replace(data)
    })
  }, [])

  return (
    <button
      type="button"
      onClick={handleGoogle}
      className="mt-10 flex w-full items-center justify-center space-x-2 text-xl"
    >
      <Image src="/google-logo.png" alt="google" width={30} height={50} />
      <h1>Google</h1>
    </button>
  )
}

export default GoogleAuth
