import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ButtonComponent, LabeledInputComponent } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'
import { EmailSchema, ResetPasswordSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [nextStep, setNextStep] = useState(false)

  const router = useRouter()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  })

  const {
    register: newRegister,
    reset: newReset,
    handleSubmit: newHandleSubmit,
    formState: { errors: newError },
  } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      code: '',
      password: '',
    },
  })

  const handleSendEmail = ({ email }) => {
    setIsLoading(true)
    fetchRequest(HttpMethods.PATCH, 'auth/forget-password', {
      email,
    })
      .then(({ status }) => {
        if (status === 200) setNextStep(true)
      })
      .finally(() => {
        setIsLoading(false)
        reset()
      })
  }

  const handleSendCode = ({ code, password }) => {
    setIsLoading(true)
    fetchRequest(HttpMethods.PATCH, 'auth/reset-password', {
      resetPasswordToken: code,
      newPassword: password,
    })
      .then(({ status }) => {
        if (status === 200) router.push('/login')
      })
      .finally(() => {
        setIsLoading(false)
        newReset()
      })
  }

  return (
    <>
      <Head>
        <title>Forget Password | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <Link
          href="/"
          className="flex w-[200px] flex-col items-center justify-center -translate-y-full"
        >
          <Image src="/favicon.png" alt="logo" width={200} height={200} />
          <h1 className="text-base font-bold tracking-wide"> POS PLUTO </h1>
        </Link>
        {nextStep ? (
          <form
            onSubmit={newHandleSubmit(handleSendCode)}
            className="w-100 space-y-4 text-black/90"
          >
            <LabeledInputComponent
              id="code"
              error={newError.code}
              {...newRegister('code')}
              placeholder="0 - 0 - 0 - 0 - 0 - 0"
            />
            <LabeledInputComponent
              id="password"
              error={newError.password}
              {...newRegister('password')}
              placeholder="new password"
            />
            <ButtonComponent
              type="submit"
              isLoading={isLoading}
              className="w-full"
              label="Send Code"
            />
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(handleSendEmail)}
            className="w-100 space-y-4 text-black/90"
          >
            <LabeledInputComponent
              id="email"
              error={errors.email}
              {...register('email')}
              placeholder="Email"
            />
            <ButtonComponent
              type="submit"
              isLoading={isLoading}
              className="w-full"
              label="Send Email"
            />
          </form>
        )}
      </main>
    </>
  )
}

export default ForgetPassword
