import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCallback, useState } from 'react'

import { ButtonComponent, InputFieldComponent } from 'components'
import { KeyIcon, MailIcon } from 'components/Icons'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleUserName = useCallback((event) => {
    setUserName(event.target.value)
  }, [])

  const handlePassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login')
    router.push('/home')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

      <InputFieldComponent
        placeholder="Username"
        value={userName}
        onEdit={handleUserName}
        className="w-[400px]"
      >
        <MailIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Password"
        value={password}
        onEdit={handlePassword}
        className="w-[400px]"
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
