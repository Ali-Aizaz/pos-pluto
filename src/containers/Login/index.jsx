/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCallback, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ButtonComponent, InputFieldComponent } from 'components'
import { KeyIcon, MailIcon } from 'components/Icons'
import { HttpMethods } from 'configs/constants'
import UserDataContext from 'context/userData'
import fetchRequest from 'utils/fetchRequest'
import { SignInSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { setUserData } = useContext(UserDataContext)

  const router = useRouter()
  const handleSignIn = useCallback(
    (values) => {
      const { email, password } = values
      setIsLoading(true)
      fetchRequest(HttpMethods.POST, 'auth/signin', {
        email,
        password,
      })
        .then(({ data, status }) => {
          if (status === 200) {
            setUserData({ ...data, authorized: true })
            router.push('/home')
          } else if (status === 403) router.push('/verify-email')
        })
        .finally(() => setIsLoading(false), reset())
    },
    [reset, router, setUserData]
  )

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="flex flex-col items-center justify-center space-y-6 text-black/90"
    >
      <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

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
        placeholder="Password"
        id="password"
        error={errors.password}
        {...register('password')}
        type="password"
        className="w-100"
      >
        <KeyIcon />
      </InputFieldComponent>

      <Link href="forget-password">
        <h1 className="w-100 text-white -translate-y-4 text-end font-medium tracking-wide">
          Forget Password?
        </h1>
      </Link>
      <ButtonComponent
        isLoading={isLoading}
        type
        label="Login"
        className="w-100"
      />
    </form>
  )
}

export default Login
