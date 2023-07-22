import Image from 'next/image'
import Link from 'next/link'

import { GoogleAuth, RegisterContainer } from 'containers'

export default function Login() {
  return (
    <main className="h-screen max-h-screen flex flex-col items-center pb-10 px-10 bg-black text-white">
      <section className="mb-28 flex translate-y-5 items-center justify-between px-10 w-full">
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
      <section className="flex flex-col items-center border border-white/40 w-min p-4 rounded-2xl bg-white/10">
        <RegisterContainer />
        <div className="mt-10  flex w-full  items-center justify-center space-x-4">
          <div className="h-[1px] w-44 border border-white/40" />
          <h1 className="text-center whitespace-nowrap text-white/40 ">
            Or Login with
          </h1>
          <div className="h-[1px] w-44 border border-white/40" />
        </div>
        <GoogleAuth />
      </section>
    </main>
  )
}
