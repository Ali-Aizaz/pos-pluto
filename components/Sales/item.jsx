import Image from 'next/image';
import React from 'react';

export default function Item() {
  return (
    <div className="flex h-28 w-[90%] justify-between rounded-3xl bg-white">
      <ul className="p-4 text-lg">
        <li>
          Product name: <strong>store</strong>
        </li>
        <li>
          Category: <strong>Kitchen</strong>
        </li>
        <li>
          Quantity: <strong>4</strong>
        </li>
      </ul>
      <div className="flex flex-col items-end justify-between p-4">
        <Image src="/trash.png" alt="remove from cart" width={30} height={40} />
        <h2 className="text-lg font-bold">RS 4520</h2>
      </div>
    </div>
  );
}
