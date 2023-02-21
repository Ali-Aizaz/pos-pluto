import Image from "next/image";

export default function Login() {
  return (
    <main>
      <section className="flex justify-between px-10 translate-y-10">
        <div className="flex flex-col justify-center items-center w-[200px]">
          <Image src={"/favicon.png"} alt="logo" width={200} height={200} />
          <h1 className="text-base tracking-wide font-bold"> POS PLUTO </h1>
        </div>
        <div className="flex flex-col justify-center items-center w-[200px]">
          <button className="w-[150px] px-5 bg-theme-purple text-sm font-bold -tracking-wider text-white rounded-xl">
            SIGN-UP
          </button>
        </div>
      </section>
    </main>
  );
}
