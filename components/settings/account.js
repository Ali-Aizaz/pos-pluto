import Image from "next/image";
import { useState } from "react";

export default function AccountSetting() {
  const [companyName, setCompanyName] = useState("");
  return (
    <form className="flex flex-col text-theme-text-gray">
      <div className="flex flex-col items-center w-[300px]">
        <h1 className="text-xl  font-medium mb-3">Your Company logo</h1>
        <div className=" w-[150px] flex flex-col items-center p-4 text-center space-y-3 bg-theme-bg-gray rounded-2xl border-dashed border border-theme-light-gray">
          <div className="w-12">
            <Image
              src="/gallery-add.png"
              alt="add to gallery"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-theme-light-gray font-semibold">
            Upload Company logo
          </h1>
        </div>
      </div>
      <div className="w-full py-10 border-t-4 mt-10 grid grid-cols-2 text-2xl">
        <div className="flex flex-col ">
          <label className="text-2xl text-theme-text-gray ">Company Name</label>
          <input
            className="p-3 bg-theme-bg-gray"
            placeholder="Please enter the name of you company"
            type={"text"}
            value={companyName}
            onChange={""}
          />
        </div>
      </div>
    </form>
  );
}
