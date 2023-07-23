import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { ButtonComponent, LabeledInputComponent } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'
import { EmailSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSendEmail = ({ email }) => {
    setIsLoading(true)
    fetchRequest(HttpMethods.GET, `auth/send-verification-email/${email}`)
      .then(({ status, data }) => {
        if (status === 200) toast.success(data)
      })
      .finally(() => {
        setIsLoading(false)
        reset()
      })
  }

  return (
    <>
      <Head>
        <title>Verify Email | Pos Pluto</title>
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
            label="Send Verfication Email"
          />
        </form>
      </main>
    </>
  )
}

export default VerifyEmail
