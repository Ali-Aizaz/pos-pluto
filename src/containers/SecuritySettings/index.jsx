import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { LabeledInputComponent, SubmitResetButtonComponent } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'
import { ChangePasswordSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

export default function SecuritySettings() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      newPassword: '',
      checkPassword: '',
    },
  })

  const handleChangePassword = ({ password, newPassword }) => {
    setIsLoading(true)
    fetchRequest(HttpMethods.POST, 'users/change-password', {
      changePassword: password,
      newPassword,
    })
      .then(({ status }) => {
        if (status === 200) toast.success('Password changed successfully')
        router.push('/home')
      })
      .finally(() => {
        setIsLoading(false)
        reset()
      })
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(handleChangePassword)}
    >
      <div className="mt-10 flex w-full flex-col gap-y-7 py-4 text-lg font-medium">
        <h2 className="text-2xl text-gray">Change Password:</h2>

        <LabeledInputComponent
          id="password"
          error={errors.password}
          {...register('password')}
          placeholder="Enter current password"
          className="w-[400px]"
        />
        <LabeledInputComponent
          id="newPassword"
          error={errors.newPassword}
          {...register('newPassword')}
          placeholder="Enter new password"
          className="w-[400px]"
        />
        <LabeledInputComponent
          id="checkPassword"
          error={errors.checkPassword}
          {...register('checkPassword')}
          placeholder="Enter confirm new password"
          className="w-[400px]"
        />
      </div>
      <SubmitResetButtonComponent
        isLoading={isLoading}
        label="Change Password"
        onReset={reset}
      />
    </form>
  )
}
