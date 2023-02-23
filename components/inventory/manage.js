import Image from "next/image";
import InputField from "../settings/inputField";
import { useState } from "react";
export default function Manage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="w-full">
      <label className="text-2xl text-theme-text-gray mb-2">Filters: </label>
      <div className="py-3 mb-4 space-x-5 flex">
        <InputField
          placeholder={"Search for "}
          value={search}
          setValue={setSearch}
          extraCss="w-[350px]"
        />
        <InputField
          placeholder={"Category "}
          value={category}
          setValue={setCategory}
          extraCss="w-[350px]"
        />
        <InputField
          placeholder={"Name Search"}
          value={name}
          setValue={setName}
          extraCss="w-[350px]"
        />
      </div>
      <div className="border-t-2 p-3 space-y-5 ">
        <ul className="flex text-xl ">
          <li className="w-[200px]">Product Name</li>
          <li className="w-[200px] ">Category</li>
          <li className="w-[200px] ">Quantity</li>
          <li className="w-[200px] ">Actions</li>
        </ul>
      </div>
      <div className="border-t-2 p-3 space-y-5 font-thin text-xl">
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Stove</li>
          <li className="w-[200px] ">Kitchen</li>
          <li className="w-[200px] ">500</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
