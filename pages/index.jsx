import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LogoComponent } from '../components';

export default function Home() {
  return (
    <main className=" flex items-start pl-[7%]">
      <section className="w-[50vw]">
        <LogoComponent />
        <div className="flex translate-y-[30vh] flex-col">
          <h1 className="text-7xl">Revolutionize Sales, </h1>
          <h1 className="text-7xl font-semibold">Build POS</h1>
          <p className="mt-5 w-[30vw] text-2xl">
            Streamline sales, manage inventory, and gain valuable insights all
            in one easy-to-use platform.
          </p>
          <div className="mt-10 w-[30vw] space-x-10 text-xl">
            <Link
              href="/login"
              className="w-[120px] rounded-lg bg-black p-4 text-white"
            >
              LOGIN
            </Link>
            <Link href="/signup" className="w-[120px] rounded-lg p-4">
              SIGN UP
            </Link>
          </div>
        </div>
      </section>
      <section className="absolute right-0 aspect-square w-[50vw] overflow-hidden">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          style={{ objectFit: 'contain' }}
        />
      </section>
    </main>
  );
}
