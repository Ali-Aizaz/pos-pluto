import Image from 'next/image';
import React from 'react';

function Logo() {
  return (
    <div className="flex translate-y-5 items-center -space-x-10">
      <Image src="/favicon.png" alt="logo" width={150} height={150} />
      <h1 className="text-3xl font-bold"> POS PLUTO </h1>
    </div>
  );
}

export default Logo;
