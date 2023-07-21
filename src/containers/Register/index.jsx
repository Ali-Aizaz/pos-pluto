/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image'
import { useRouter } from 'next/router'

import React, { useCallback, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

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
import { SignUpSchema, StoreSchema } from 'utils/yupConfig'

import { yupResolver } from '@hookform/resolvers/yup'

function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [nextStep, setNextStep] = useState(false)
  const [image, setImage] = useState('')
  const [storeValue, setStoreValues] = useState({
    storeName: '',
    storeDescription: '',
  })

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0]
    if (file && file.size <= 10 * 1024 * 1024) {
      const reader = new FileReader()

      reader.onload = () => {
        setImage(reader.result)
      }
      reader.onerror = (error) => {
        toast.error(`Error: ${error}`)
      }
      reader.readAsDataURL(file)
    } else {
      toast.error('Please select an image that is less than 10MB in size.')
    }
  }, [])

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
    },
  })

  const {
    register: storeRegister,
    handleSubmit: storeSubmit,
    reset: storeReset,
    formState: { errors: storeError },
  } = useForm({
    resolver: yupResolver(StoreSchema),
    mode: 'onBlur',
    defaultValues: {
      storeName: '',
      storeDescription: '',
    },
  })

  const { setUserData } = useContext(UserDataContext)

  const router = useRouter()

  const handleNextStep = useCallback((values) => {
    setNextStep(true)
    setStoreValues(values)
  }, [])

  const handleSignUp = useCallback(
    (values) => {
      setIsLoading(true)
      const { name, email, password } = values

      fetchRequest(HttpMethods.POST, 'auth/signup', {
        storeName: storeValue.storeName,
        storeDescription: storeValue.storeDescription,
        image,
        name,
        email,
        password,
      })
        .then(({ data, error }) => {
          if (!error) {
            setUserData({ ...data, authorized: true })
            reset()
            storeReset()
            router.push('/home')
          }
        })
        .finally(() => setIsLoading(false))
    },

    [
      image,
      reset,
      router,
      setUserData,
      storeReset,
      storeValue.storeDescription,
      storeValue.storeName,
    ]
  )

  return nextStep ? (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex flex-col space-y-6 text-black"
    >
      <h1 className="text-4xl text-center font-semibold text-white ">
        REGISTER
      </h1>
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
  ) : (
    <form
      onSubmit={storeSubmit(handleNextStep)}
      className="flex flex-col space-y-6 text-black"
    >
      <h1 className="text-4xl text-center font-semibold text-white ">
        CREATE STORE
      </h1>
      {image ? (
        <div className="border border-black/10 rounded-xl">
          <Image
            src={image}
            alt="Selected"
            width={400}
            height={200}
            className="rounded-2xl h-48 overflow-hidden"
          />
        </div>
      ) : (
        <label htmlFor="image-input" className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-input"
          />
          <div className="bg-grayLight border-light-gray flex flex-col items-center space-y-3 rounded-xl border border-dashed p-2 text-center">
            <div className="w-6">
              <Image
                src="/gallery-add.png"
                alt="add to gallery"
                width={400}
                height={400}
              />
            </div>
            <h1 className="text-sm font-semibold text-light-gray">
              Upload Store Image
            </h1>
          </div>
        </label>
      )}
      <InputFieldComponent
        placeholder="Store Name"
        id="storeName"
        error={storeError.storeName}
        {...storeRegister('storeName')}
        className="w-100"
      >
        <TagIcon />
      </InputFieldComponent>
      <InputFieldComponent
        placeholder="Description"
        id="storeDescription"
        error={storeError.storeDescription}
        {...storeRegister('storeDescription')}
        className="w-100"
      >
        <TagIcon />
      </InputFieldComponent>
      <ButtonComponent
        isLoading={isLoading}
        type
        label="Create Store"
        className="w-100"
      />
    </form>
  )
}

export default Register
