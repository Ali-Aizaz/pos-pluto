import { LoginContainer } from "@/containers";
import Image from "next/image";
import Link from "next/link";
import { handleGoogle } from "@/utils/auth";

export default function Login() {
  return (
    <main className="h-screen bg-black text-white">
      <section className="mb-28 flex translate-y-10 items-start justify-between px-10">
        <div className="flex w-[200px] flex-col items-center justify-center">
          <Image src={"/favicon.png"} alt="logo" width={200} height={200} />
          <h1 className="text-base font-bold tracking-wide"> POS PLUTO </h1>
        </div>
        <div className="flex w-[200px] flex-col items-center justify-center">
          <Link href={"/signup"}>
            <button className="bg-theme-purple w-[150px] rounded-xl px-5 py-1 text-sm font-bold -tracking-wider text-white">
              SIGN-UP
            </button>
          </Link>
        </div>
      </section>
      <LoginContainer />
      <div className="mt-10  flex w-full  items-center justify-center space-x-4">
        <div className="h-[1px] w-44 border border-white/40" />
        <h1 className="text-center text-white/40 ">Or Login with</h1>
        <div className="h-[1px] w-44 border border-white/40" />
      </div>
      <button
        onClick={handleGoogle}
        className="mt-10 flex w-full items-center justify-center space-x-2 text-xl"
      >
        <Image src={"/google-logo.png"} alt="google" width={30} height={50} />
        <h1>Google</h1>
      </button>
    </main>
  );
}
