import Image from 'next/image'
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
      <div className="flex w-[300px] flex-col items-center">
        <h1 className="mb-3 text-lg font-medium">Employee Picture</h1>
        <div className=" bg-gray/20 border-light-gray flex w-[110px] flex-col items-center space-y-3 rounded-2xl border border-dashed p-2 text-center">
          <div className="w-6">
            <Image
              src="/gallery-add.png"
              alt="add to gallery"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-light-gray text-sm font-semibold">
            Upload Employee Picture
          </h1>
        </div>
      </div>
      <div className="my-5 w-full flex flex-col gap-x-10 gap-y-7 border-t-4 border-black/10 py-4 text-lg font-medium">
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
