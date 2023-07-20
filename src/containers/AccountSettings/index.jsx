import { useRouter } from 'next/router'

import React, { useState } from 'react'

import {
  ImageInput,
  LabeledInputComponent,
  SubmitResetButtonComponent,
} from 'components'

export default function AccountSetting() {
  const [companyName, setCompanyName] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')

  const router = useRouter()
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
    router.push('/home')
  }

  const handleReset = () => {}

  return (
    <form
      className="flex flex-col items-start text-gray"
      onSubmit={handleUpdate}
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-3 text-lg font-medium">Your Company logo</h1>
        <ImageInput
          title="Upload Company logo"
          handleSetImage={setImage}
          image={image}
        />
      </div>
      <div className="mt-5 grid w-full grid-cols-2 gap-x-10 gap-y-7 border-t-4 py-4 text-lg font-medium">
        <LabeledInputComponent
          value={companyName}
          setValue={setCompanyName}
          placeholder="Please enter your full name"
          label="Company Name"
        />
        <LabeledInputComponent
          value={email}
          setValue={setEmail}
          placeholder="Please enter your email"
          label="Email"
        />
        <LabeledInputComponent
          value={username}
          setValue={setUsername}
          placeholder="Please enter your username"
          label="Username"
        />
        <LabeledInputComponent
          value={phone}
          setValue={setPhone}
          placeholder="Please enter your phone number"
          label="Phone number"
        />
        <div className="col-span-2 flex flex-col space-y-2">
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
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  )
}
