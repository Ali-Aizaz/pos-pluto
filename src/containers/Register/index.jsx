import { useRouter } from 'next/router'

import React, { useCallback, useContext, useState } from 'react'

import {
  ButtonComponent,
  InputFieldComponent,
  KeyIcon,
  MailIcon,
  TagIcon,
} from 'components'
import { UserIcon } from 'components/Icons'
import UserDataContext from 'context/userData'
import { HttpMethods } from 'utils/constants'
import fetchRequest from 'utils/fetchRequest'

function Register() {
  const [store, setStore] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const { setUserData } = useContext(UserDataContext)

  const handleDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [])

  const handleStoreName = useCallback((event) => {
    setStore(event.target.value)
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      if (
        store.trim() === '' ||
        description.trim() === '' ||
        name.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        password.trim() !== rePassword.trim()
      ) {
        return
      }

      fetchRequest(HttpMethods.POST, 'auth/signup', {
        storeName: store,
        storeDescription: description,
        name,
        email,
        password,
      }).then(({ data, error }) => {
        if (!error) {
          setUserData({ ...data, authorized: true })
          router.push('/home')
        }
      })
    },
    [description, email, name, password, rePassword, router, setUserData, store]
  )

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-6 text-black"
    >
      <h1 className="text-4xl font-semibold text-white ">REGISTER</h1>

      <InputFieldComponent
        placeholder="Store Name"
        value={store}
        onEdit={handleStoreName}
        className="w-[400px]"
      >
        <TagIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Description"
        value={description}
        onEdit={handleDescription}
        className="w-[400px]"
      >
        <TagIcon />
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
      <ButtonComponent type label="SIGN UP" className="w-[400px]" />
    </form>
  )
}

export default Register
