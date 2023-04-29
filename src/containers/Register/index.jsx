import { useRouter } from 'next/router'

import React, { useCallback, useState } from 'react'

import {
  ButtonComponent,
  InputFieldComponent,
  KeyIcon,
  MailIcon,
  TagIcon,
} from 'components'
import { UserIcon } from 'components/Icons'

function Register() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleUserName = useCallback((event) => {
    setUserName(event.target.value)
  }, [])

  const handlePassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  const handleRePassword = useCallback((event) => {
    setRePassword(event.target.value)
  }, [])

  const handleEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handleName = useCallback((event) => {
    setName(event.target.value)
  }, [])

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('signup')
    router.push('/home')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

      <InputFieldComponent
        placeholder="username"
        value={username}
        onEdit={handleUserName}
        className="w-[400px]"
      >
        <TagIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Password"
        value={password}
        onEdit={handlePassword}
        className="w-[400px]"
      >
        <KeyIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Re-enter Password"
        value={rePassword}
        onEdit={handleRePassword}
        className="w-[400px]"
      >
        <KeyIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Email"
        value={email}
        onEdit={handleEmail}
        className="w-[400px]"
      >
        <MailIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="First Name"
        value={name}
        onEdit={handleName}
        className="w-[400px]"
      >
        <UserIcon />
      </InputFieldComponent>
      <ButtonComponent type label="SIGN UP" className="w-[400px]" />
    </form>
  )
}

export default Register
