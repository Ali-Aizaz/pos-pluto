import Image from 'next/image'
import Link from 'next/link'

import { RegisterContainer } from 'containers'
import handleGoogle from 'utils/auth'

export default function Login() {
  return (
    <main className="h-screen max-h-screen flex flex-col justify-between pb-10 px-10 bg-black text-white">
      <section className="flex items-center justify-between">
        <div className="flex w-[200px] flex-col items-center justify-center">
          <Image src="/favicon.png" alt="logo" width={200} height={200} />
          <h1 className="text-base font-bold tracking-wide"> POS PLUTO </h1>
        </div>
        <div className="flex w-[200px] flex-col items-center justify-center">
          <Link href="/login">
            <button
              type="button"
              className="bg-theme-purple w-[150px] rounded-xl px-5 py-1 text-sm font-bold -tracking-wider text-white"
            >
              LOGIN
            </button>
          </Link>
        </div>
      </section>
      <section>
        <RegisterContainer />
        <div className="mt-10  flex w-full  items-center justify-center space-x-4">
          <div className="h-[1px] w-44 border border-white/40" />
          <h1 className="text-center text-white/40 ">Or Login with</h1>
          <div className="h-[1px] w-44 border border-white/40" />
        </div>
        <button
          type="button"
          onClick={handleGoogle}
          className="mt-10 flex w-full items-center justify-center space-x-2 text-xl"
        >
          <Image src="/google-logo.png" alt="google" width={30} height={50} />
          <h1>Google</h1>
        </button>
      </section>
    </main>
  )
}
