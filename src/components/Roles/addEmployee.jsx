import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState } from 'react'

import { LabeledInputComponent, SubmitResetButtonComponent } from 'components'

export default function AddEmployee() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [role, setRole] = useState('')
  const router = useRouter()

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
    router.push('/home')
  }

  const handleReset = () => {}

  return (
    <form
      className="text-theme-text-gray flex flex-col"
      onSubmit={handleUpdate}
    >
      <div className="flex w-[300px] flex-col items-center">
        <h1 className="mb-3 text-lg font-medium">Employee Picture</h1>
        <div className=" bg-theme-bg-gray border-theme-light-gray flex w-[110px] flex-col items-center space-y-3 rounded-2xl border border-dashed p-2 text-center">
          <div className="w-6">
            <Image
              src="/gallery-add.png"
              alt="add to gallery"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-theme-light-gray text-sm font-semibold">
            Upload Employee Picture
          </h1>
        </div>
      </div>
      <div className="mt-5 grid w-full grid-cols-2 gap-x-10 gap-y-7 border-t-4 py-4 text-lg font-medium">
        <LabeledInputComponent
          value={name}
          setValue={setName}
          placeholder="Name"
          label="Employee Bio:"
          className="space-y-7 w-[500px]"
        />
        <LabeledInputComponent
          value={username}
          setValue={setUsername}
          placeholder="Username"
          label="Employee ID"
          className="space-y-7 w-[500px]"
        />

        <LabeledInputComponent
          value={position}
          setValue={setPosition}
          placeholder="Position"
          className="space-y-7 w-[500px]"
        />
        <LabeledInputComponent
          value={role}
          setValue={setRole}
          placeholder="Role"
          className="space-y-7 w-[500px]"
        />
        <LabeledInputComponent
          value={password}
          setValue={setPassword}
          placeholder="Password"
          className="space-y-7 w-[500px]"
        />
        <LabeledInputComponent
          value={rePassword}
          setValue={setRePassword}
          placeholder="Confirm Password"
          className="space-y-7 w-[500px]"
        />
      </div>
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  )
}
