import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCallback, useContext, useState } from 'react'

import { ButtonComponent, InputFieldComponent } from 'components'
import { KeyIcon, MailIcon } from 'components/Icons'
import { HttpMethods } from 'configs/constants'
import UserDataContext from 'context/userData'
import fetchRequest from 'utils/fetchRequest'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUserData } = useContext(UserDataContext)

  const handleEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handlePassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  const router = useRouter()
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      fetchRequest(HttpMethods.POST, 'auth/signin', {
        email,
        password,
      }).then(({ data, error }) => {
        if (!error) {
          setUserData({ ...data, authorized: true })
          router.push('/home')
        }
      })
    },
    [email, password, router, setUserData]
  )

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

      <InputFieldComponent
        placeholder="Email"
        value={email}
        onEdit={handleEmail}
        className="w-[400px] text-black"
      >
        <MailIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Password"
        value={password}
        onEdit={handlePassword}
        className="w-[400px] text-black"
      >
        <KeyIcon />
      </InputFieldComponent>
      <Link href="forget-password">
        <h1 className="w-[400px] -translate-y-4 text-end font-medium tracking-wide">
          Forget Password?
        </h1>
      </Link>
      <ButtonComponent type label="Login" className="w-[400px]" />
    </form>
  )
}

export default Login
