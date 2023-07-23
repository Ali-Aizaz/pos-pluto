import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { GoogleAuth, LoginContainer } from 'containers'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen bg-black text-white flex flex-col items-center">
        <section className="mb-28 flex translate-y-5 items-center justify-between px-10 w-full">
          <Link
            href="/"
            className="flex w-[200px] flex-col items-center justify-center"
          >
            <Image src="/favicon.png" alt="logo" width={200} height={200} />
            <h1 className="text-base font-bold tracking-wide"> POS PLUTO </h1>
          </Link>
          <div className="flex w-[200px] flex-col items-center justify-center">
            <Link href="/signup">
              <button
                type="button"
                className="bg-theme-purple w-[150px] rounded-xl px-5 py-1 text-sm font-bold -tracking-wider text-white"
              >
                SIGN-UP
              </button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col items-center border border-white/40 w-min p-4 rounded-2xl bg-white/10">
          <LoginContainer />
          <div className="mt-10  flex w-full  items-center justify-center space-x-4">
            <div className="h-[1px] w-44 border border-white/40" />
            <h1 className="text-center text-white/40 whitespace-nowrap">
              Or Login with
            </h1>
            <div className="h-[1px] w-44 border border-white/40" />
          </div>
          <GoogleAuth />
        </section>
      </main>
    </>
  )
}
