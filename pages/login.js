import { LoginContainer } from "@/containers";
import Image from "next/image";
import Link from "next/link";
import { handleGoogle } from "@/utils/auth";

export default function Login() {
  return (
    <main className="bg-black h-screen text-white">
      <section className="flex justify-between items-start px-10 translate-y-10 mb-28">
        <div className="flex flex-col justify-center items-center w-[200px]">
          <Image src={"/favicon.png"} alt="logo" width={200} height={200} />
          <h1 className="text-base tracking-wide font-bold"> POS PLUTO </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[200px]">
          <Link href={"/signup"}>
            <button className="w-[150px] px-5 py-1 bg-theme-purple text-sm font-bold -tracking-wider text-white rounded-xl">
              SIGN-UP
            </button>
          </Link>
        </div>
      </section>
      <LoginContainer />
      <div className="flex  mt-10 w-full  items-center justify-center space-x-4">
        <div className="border h-[1px] border-white/40 w-44" />
        <h1 className="text-center text-white/40 ">Or Login with</h1>
        <div className="border h-[1px] border-white/40 w-44" />
      </div>
      <button
        onClick={handleGoogle}
        className="flex justify-center items-center w-full space-x-2 text-xl mt-10"
      >
        <Image src={"/google-logo.png"} alt="google" width={30} height={50} />
        <h1>Google</h1>
      </button>
    </main>
  );
}
