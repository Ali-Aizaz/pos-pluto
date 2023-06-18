/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router'

import React, { useCallback, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  ButtonComponent,
  InputFieldComponent,
  KeyIcon,
  MailIcon,
  TagIcon,
} from 'components'
import { UserIcon } from 'components/Icons'
import { HttpMethods } from 'configs/constants'
import UserDataContext from 'context/userData'
import fetchRequest from 'utils/fetchRequest'
import { SignUpSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

function Register() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
      name: '',
      storeName: '',
      storeDescription: '',
    },
  })

  const { setUserData } = useContext(UserDataContext)

  const router = useRouter()

  const handleSignUp = useCallback(
    (values) => {
      setIsLoading(true)
      const { storeName, storeDescription, name, email, password } = values
      fetchRequest(HttpMethods.POST, 'auth/signup', {
        storeName,
        storeDescription,
        name,
        email,
        password,
      })
        .then(({ data, error }) => {
          if (!error) {
            setUserData({ ...data, authorized: true })
            reset()
            router.push('/home')
          }
        })
        .finally(() => setIsLoading(false))
    },

    [reset, router, setUserData]
  )

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex flex-col items-center justify-center space-y-6 text-black"
    >
      <h1 className="text-4xl font-semibold text-white ">REGISTER</h1>

      <InputFieldComponent
        placeholder="Store Name"
        id="storeName"
        error={errors.storeName}
        {...register('storeName')}
        className="w-100"
      >
        <TagIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Description"
        id="storeDescription"
        error={errors.storeDescription}
        {...register('storeDescription')}
        className="w-100"
      >
        <TagIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Email"
        id="email"
        error={errors.email}
        {...register('email')}
        className="w-100"
      >
        <MailIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Name"
        id="name"
        error={errors.name}
        {...register('name')}
        className="w-100"
      >
        <UserIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Password"
        id="password"
        error={errors.password}
        {...register('password')}
        className="w-100"
      >
        <KeyIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Re-enter Password"
        id="confirm"
        error={errors.confirm}
        {...register('confirm')}
        className="w-100"
      >
        <KeyIcon />
      </InputFieldComponent>
      <ButtonComponent
        isLoading={isLoading}
        type
        label="SIGN UP"
        className="w-100"
      />
    </form>
  )
}

export default Register
