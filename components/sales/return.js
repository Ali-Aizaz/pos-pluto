import { useState } from "react";
import InputField from "../settings/inputField";
import Image from "next/image";
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
        <div className="ml-5 w-[300px] h-[60vh] flex flex-col font-medium items-center">
          <div className="w-full bg-theme-light-black/40 p-2">
            <h1 className="text-xl text-black ">Raheel Hussain</h1>
            <label className="text-xl text-theme-purple">Name</label>
          </div>
          <div className="w-full bg-theme-light-black/20 p-2">
            <h1 className="text-xl text-black ">0300-2175467</h1>
            <label className="text-xl text-theme-purple">Phone number</label>
          </div>
          <div className="w-full bg-theme-light-black/30 p-2">
            <h1 className="text-xl text-black ">29-nov-2023</h1>
            <label className="text-xl text-theme-purple">Date of sales</label>
          </div>
          <div className="w-full bg-theme-light-black/20 p-2">
            <h1 className="text-xl text-black ">564091</h1>
            <label className="text-xl text-theme-purple">Receipt No.</label>
          </div>
          <div className="w-full bg-theme-purple/40 p-2">
            <h1 className="text-xl text-black ">RS 7800</h1>
            <label className="text-xl text-theme-purple">TOTAL AMOUNT</label>
          </div>
          <button className="text-3xl text-white bg-black px-3 py-2 mt-2 w-[150px]">
            Return
          </button>
        </div>
      </div>
    </section>
  );
}
