import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/button";
import InputField from "../components/inputField";
import { useRouter } from "next/router";
import { handleGoogle } from "../utils/auth";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup");
    router.push("/home");
  };

  return (
    <main className="bg-black h-screen text-white">
      <section className="flex justify-between items-start px-10 translate-y-10 mb-28">
        <div className="flex flex-col justify-center items-center w-[200px]">
          <Image src={"/favicon.png"} alt="logo" width={200} height={200} />
          <h1 className="text-base tracking-wide font-bold"> POS PLUTO </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[200px]">
          <Link href={"/login"}>
            <button className="w-[150px] px-5 py-1 bg-theme-purple text-sm font-bold -tracking-wider text-white rounded-xl">
              LOGIN
            </button>
          </Link>
        </div>
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-6"
      >
        <h1 className="text-4xl font-semibold text-white ">LOGIN</h1>

        <InputField
          src={"/username.png"}
          placeholder="username"
          value={username}
          setValue={setUsername}
          extraCss="w-[400px]"
        />
        <InputField
          src={"/key.png"}
          placeholder="Password"
          value={password}
          setValue={setPassword}
          extraCss="w-[400px]"
        />
        <InputField
          src={"/key.png"}
          placeholder="Re-enter Password"
          value={rePassword}
          setValue={setRePassword}
          extraCss="w-[400px]"
        />
        <InputField
          src={"/mail.png"}
          placeholder="Email"
          value={email}
          setValue={setEmail}
          extraCss="w-[400px]"
        />
        <InputField
          src={"/person.png"}
          placeholder="First Name"
          value={name}
          setValue={setName}
          extraCss="w-[400px]"
        />
        <Button type={"submit"} label={"SIGN UP"} extraCss={"w-[400px]"} />
      </form>
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
