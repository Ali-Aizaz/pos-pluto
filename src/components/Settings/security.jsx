import { useRouter } from 'next/router'

import React, { useState } from 'react'

import {
  LabeledInputComponent,
  SubmitResetButtonComponent,
  ToggleSwitchComponent,
} from 'components'

export default function SecuritySettings() {
  const [TFA, setTFA] = useState('')
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [reNewPass, setReNewPass] = useState('')
  const [TFAtoggle, setTFAtoggle] = useState(false)

  const router = useRouter()

  const handleTFA = (e) => {
    if (e.target.value.length > 4) return
    setTFA(e.target.value)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
    router.push('/home')
  }

  const handleReset = () => {}

  return (
    <form className="flex flex-col" onSubmit={handleUpdate}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-medium text-gray">
          2FA-TWO FACTOR AUTHENTICATION
        </h2>
        <ToggleSwitchComponent value={TFAtoggle} setValue={setTFAtoggle} />
        <input
          className="w-[120px] rounded-xl bg-gray px-5 py-2 text-3xl outline-none"
          placeholder="- - - -"
          type="text"
          value={TFA}
          onChange={(e) => handleTFA(e)}
        />
        <p className="w-[300px] font-medium text-light-gray">
          You will get an otp on your registered mobile number via sms.
        </p>
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-7 border-t-4 py-4 text-lg font-medium">
        <h2 className="text-2xl text-gray">Change Password:</h2>

        <LabeledInputComponent
          value={currentPass}
          setValue={setCurrentPass}
          placeholder="Enter current password"
          className="w-[400px]"
        />
        <LabeledInputComponent
          value={newPass}
          setValue={setNewPass}
          placeholder="Enter new password"
          className="w-[400px]"
        />
        <LabeledInputComponent
          value={reNewPass}
          setValue={setReNewPass}
          placeholder="Enter confirm new password"
          className="w-[400px]"
        />
      </div>
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  )
}
