import InputField from "../settings/inputField";
import { useState } from "react";

export default function SalesHistory() {
  const [recipt, setRecipt] = useState("");

  return (
    <section className="flex flex-col">
      <div className="w-4/5 flex justify-end">
        <InputField
          value={recipt}
          setValue={setRecipt}
          placeholder="Enter recipt number or phone number"
          extraCss={"w-[350px]"}
        />
      </div>
      <div className="w-full">
        <div className="p-3 space-y-5">
          <ul className="flex text-xl ">
            <li className="w-[200px]">Reciept No</li>
            <li className="w-[200px] ">Customer name</li>
            <li className="w-[200px] ">Phone number</li>
            <li className="w-[200px] ">Product</li>
            <li className="w-[200px] ">Quantity</li>
          </ul>
        </div>
        <div className="border-t-2 p-3 space-y-5 font-thin text-xl">
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
          <ul className="flex  ">
            <li className="w-[200px] ">#5432</li>
            <li className="w-[200px] ">Raheel</li>
            <li className="w-[200px] ">+923035555555</li>
            <li className="w-[200px] ">Store</li>
            <li className="w-[200px] ">1</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
