import { useState } from "react";
import InputField from "../settings/inputField";
import Image from "next/image";
import UserDetails from "./userDetails";
export default function Return() {
  const [recipt, setRecipt] = useState("");
  return (
    <section className="text-theme-text-gray">
      <InputField
        value={recipt}
        setValue={setRecipt}
        placeholder="Enter recipt number or phone number"
        extraCss={"w-[350px]"}
      />
      <div className="flex justify-between">
        <div className="w-full">
          <div className="border-t-2 p-3 mt-10 space-y-5">
            <h1 className="text-base font-medium ">Sales Details: </h1>
            <ul className="flex text-xl ">
              <li className="w-[150px]">Product name</li>
              <li className="w-[150px] ">Warranty</li>
              <li className="w-[150px] ">Quantity</li>
              <li className="w-[150px] ">Actions</li>
            </ul>
          </div>
          <div className="border-t-2 p-3 mt-3 space-y-5 font-thin text-xl">
            <ul className="flex  ">
              <li className="w-[150px] ">Stove</li>
              <li className="w-[150px] ">12 months</li>
              <li className="w-[150px] ">5</li>
              <li className="w-[150px] ">
                <Image
                  src={"/return.png"}
                  alt="return"
                  width={30}
                  height={40}
                />
              </li>
            </ul>
          </div>
        </div>
        <UserDetails />
      </div>
    </section>
  );
}
