import Image from "next/image";
import { useState } from "react";
import Button from "../button";
import InputField from "../settings/inputField";
import { useRouter } from "next/router";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};

  return (
    <form
      className="flex flex-col text-theme-text-gray"
      onSubmit={handleUpdate}
    >
      <div className="flex flex-col items-center w-[300px]">
        <h1 className="text-lg font-medium mb-3">Employee Picture</h1>
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
            Upload Employee Picture
          </h1>
        </div>
      </div>
      <div className="w-full py-4 border-t-4 mt-5 grid grid-cols-2 text-lg font-medium gap-x-10 gap-y-7">
        <InputField
          value={name}
          setValue={setName}
          placeholder="Name"
          label={"Employee Bio:"}
          extraCss="space-y-7 w-[500px]"
        />
        <InputField
          value={username}
          setValue={setUsername}
          placeholder="Username"
          label={"Employee ID"}
          extraCss="space-y-7 w-[500px]"
        />

        <InputField
          value={position}
          setValue={setPosition}
          placeholder="Position"
          extraCss="space-y-7 w-[500px]"
        />
        <InputField
          value={role}
          setValue={setRole}
          placeholder="Role"
          extraCss="space-y-7 w-[500px]"
        />
        <InputField
          value={password}
          setValue={setPassword}
          placeholder="Password"
          extraCss="space-y-7 w-[500px]"
        />
        <InputField
          value={rePassword}
          setValue={setRePassword}
          placeholder="Confirm Password"
          extraCss="space-y-7 w-[500px]"
        />
      </div>
      <div className="flex space-x-8 mt-10 items-end">
        <Button type={"submit"} label="Add employee" extraCss={"text-xl"} />
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
