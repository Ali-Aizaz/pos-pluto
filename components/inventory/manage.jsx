import Image from 'next/image';
import React, { useState } from 'react';
import { LabeledInputComponent } from '..';

export default function Manage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="w-full">
      <h2 className="text-theme-text-gray mb-2 text-2xl">Filters: </h2>
      <div className="mb-4 flex space-x-5 py-3">
        <LabeledInputComponent
          placeholder="Search for "
          value={search}
          setValue={setSearch}
          extraCss="w-[350px]"
        />
        <LabeledInputComponent
          placeholder="Category "
          value={category}
          setValue={setCategory}
          extraCss="w-[350px]"
        />
        <LabeledInputComponent
          placeholder="Name Search"
          value={name}
          setValue={setName}
          extraCss="w-[350px]"
        />
      </div>
      <div className="space-y-5 border-t-2 p-3 ">
        <ul className="flex text-xl ">
          <li className="w-[200px]">Product Name</li>
          <li className="w-[200px] ">Category</li>
          <li className="w-[200px] ">Quantity</li>
          <li className="w-[200px] ">Actions</li>
        </ul>
      </div>
      <div className="space-y-5 border-t-2 p-3 text-xl font-thin">
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="flex w-[200px] space-x-6 ">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button">
              <Image src="/trash.png" alt="edit" width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="flex w-[200px] space-x-6 ">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button">
              <Image src="/trash.png" alt="edit" width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="flex w-[200px] space-x-6 ">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button">
              <Image src="/trash.png" alt="edit" width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="flex w-[200px] space-x-6 ">
            <button type="button">
              <Image src="/Edit.png" alt="edit" width={25} height={20} />
            </button>
            <button type="button">
              <Image src="/trash.png" alt="edit" width={20} height={20} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
