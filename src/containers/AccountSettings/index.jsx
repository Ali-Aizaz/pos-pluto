import { useRouter } from 'next/router'

import React, { useCallback, useState } from 'react'

import {
  ImageInput,
  LabeledInputComponent,
  SubmitResetButtonComponent,
} from 'components'
import { HttpMethods } from 'configs/constants'
import fetchRequest from 'utils/fetchRequest'

export default function AccountSetting() {
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const handleDescription = useCallback((e) => {
    setDescription(e.target.value)
  }, [])

  const handleCompanyName = useCallback((e) => {
    setCompanyName(e.target.value)
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetchRequest(HttpMethods.PATCH, 'users/store', {
      name: companyName,
      description,
      image,
    })
      .then(() => {
        router.push('/home')
      })
      .finally(() => setIsLoading(false))
  }

  const handleReset = () => {}

  return (
    <form
      className="flex flex-col items-start text-gray"
      onSubmit={handleUpdate}
    >
      <ImageInput
        image={image}
        handleSetImage={setImage}
        title="Upload Company Logo"
      />
      <div className="mt-5 grid grid-cols-2 w-1/2 gap-x-10 gap-y-5 mb-5 text-lg font-medium">
        <LabeledInputComponent
          value={companyName}
          onChange={handleCompanyName}
          placeholder="Please enter company name"
        />
        <div className="col-span-2 flex w-1/2 flex-col space-y-2">
          <textarea
            className="resize-none rounded-xl bg-grayLight p-5"
            rows={3}
            placeholder="description about Company"
            type="text"
            value={description}
            onChange={(e) => handleDescription(e)}
          />
        </div>
      </div>
      <SubmitResetButtonComponent isLoading={isLoading} onReset={handleReset} />
    </form>
  )
}
