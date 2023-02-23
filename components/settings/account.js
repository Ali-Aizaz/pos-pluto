import Image from "next/image";
import { useState } from "react";
import Button from "../button";
import InputField from "./inputField";
import { useRouter } from "next/router";

export default function AccountSetting() {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};

  return (
    <form
      className="flex flex-col items-start text-theme-text-gray"
      onSubmit={handleUpdate}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium mb-3">Your Company logo</h1>
        <div className=" w-[110px] flex flex-col items-center p-2 text-center space-y-3 bg-theme-bg-gray rounded-2xl border-dashed border border-theme-light-gray">
          <div className="w-6">
            <Image
              src="/gallery-add.png"
              alt="add to gallery"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-theme-light-gray font-semibold text-sm">
            Upload Company logo
          </h1>
        </div>
      </div>
      <div className="w-full py-4 border-t-4 mt-5 grid grid-cols-2 text-lg font-medium gap-x-10 gap-y-7">
        <InputField
          value={companyName}
          setValue={setCompanyName}
          placeholder="Please enter your full name"
          label={"Company Name"}
        />
        <InputField
          value={email}
          setValue={setEmail}
          placeholder="Please enter your email"
          label={"Email"}
        />
        <InputField
          value={username}
          setValue={setUsername}
          placeholder="Please enter your username"
          label={"Username"}
        />
        <InputField
          value={phone}
          setValue={setPhone}
          placeholder="Please enter your phone number"
          label={"Phone number"}
        />
        <div className={`flex flex-col space-y-2 col-span-2`}>
          <textarea
            className="p-5 bg-theme-bg-gray rounded-xl resize-none"
            rows={3}
            placeholder="description about Company"
            type={"text"}
            value={description}
            onChange={(e) => handleDescription(e)}
          />
        </div>
      </div>
      <div className="flex space-x-8 items-end">
        <Button type={"submit"} label="Update Profile" extraCss={"text-xl"} />
        <button
          className="text-xl pb-2 font-medium text-theme-text-gray"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
