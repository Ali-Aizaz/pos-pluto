import { useRouter } from 'next/router'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { LabeledInputComponent, SubmitResetButtonComponent } from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'
import { EmployeeSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

export default function AddEmployee() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmployeeSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const handleCreateEmployee = ({ name, email, password }) => {
    setIsLoading(true)
    fetchRequest(HttpMethods.POST, 'users/employees', {
      name,
      email,
      password,
    })
      .then(() => router.push('/roles?tab=Manage'))
      .finally(() => setIsLoading(false))
  }

  return (
    <form
      className="text-theme-text-gray flex flex-col"
      onSubmit={handleSubmit(handleCreateEmployee)}
    >
      <div className="my-5 w-full flex flex-col gap-x-10 gap-y-7 py-4 text-lg font-medium">
        <h1>Employee Info:</h1>
        <LabeledInputComponent
          placeholder="Name"
          id="name"
          error={errors.name}
          {...register('name')}
          className="space-y-2 w-[500px]"
        />
        <LabeledInputComponent
          placeholder="Email"
          error={errors.email}
          {...register('email')}
          id="email"
          className="space-y-2 w-[500px]"
        />
        <LabeledInputComponent
          placeholder="Password"
          error={errors.password}
          {...register('password')}
          id="password"
          className="space-y-2 w-[500px]"
        />
      </div>
      <SubmitResetButtonComponent
        label="Create Employee"
        isLoading={isLoading}
        onReset={() => reset()}
      />
    </form>
  )
}
