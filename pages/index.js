import Image from "next/image";
import Link from "next/link";
import { LogoComponent } from "@/components";
export default function Home() {
  return (
    <main className=" pl-[7%] flex items-start">
      <section className="w-[50vw]">
        <LogoComponent />
        <div className="flex flex-col translate-y-[30vh]">
          <h1 className="text-7xl">Revolutionize Sales, </h1>
          <h1 className="text-7xl font-semibold">Build POS</h1>
          <p className="text-2xl w-[30vw] mt-5">
            Streamline sales, manage inventory, and gain valuable insights all
            in one easy-to-use platform.
          </p>
          <div className="text-xl w-[30vw] mt-10 space-x-10">
            <Link
              href={"/login"}
              className="p-4 w-[120px] bg-black text-white rounded-lg"
            >
              LOGIN
            </Link>
            <Link href={"/signup"} className="p-4 w-[120px] rounded-lg">
              SIGN UP
            </Link>
          </div>
        </div>
      </section>
      <section className="absolute right-0 w-[50vw] aspect-square overflow-hidden">
        <Image
          src={"/hero.png"}
          alt="hero"
          fill
          style={{ objectFit: "contain" }}
        />
      </section>
    </main>
  );
}
