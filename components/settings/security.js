import { useState } from "react";
import InputField from "./inputField";
import Button from "../button";
export default function SecuritySettings() {
  const [TFA, setTFA] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const handleTFA = (e) => {
    if (e.target.value.length > 4) return;
    setTFA(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};

  return (
    <form className="flex flex-col" onSubmit={handleUpdate}>
      <div className="flex flex-col space-y-4">
        <label className="text-2xl text-theme-text-gray font-medium">
          2FA-TWO FACTOR AUTHENTICATION
        </label>
        <label className="relative inline-block w-20 h-9 rounded-full">
          <input type="checkbox" className="peer opacity-0 w-0 h-0" />
          <span
            className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-theme-purple rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full
          before:bg-white before:duration-300 peer-checked:before:translate-x-11 peer-checked:bg-blue-500"
          ></span>
        </label>
        <input
          className="px-5 py-2 bg-theme-bg-gray rounded-xl w-[120px] outline-none text-3xl"
          placeholder={"- - - -"}
          type={"text"}
          value={TFA}
          onChange={(e) => handleTFA(e)}
        />
        <p className="text-theme-light-gray font-medium w-[300px]">
          You will get an otp on your registered mobile number via sms.
        </p>
      </div>
      <div className="w-full py-10 border-t-4 mt-10 flex flex-col text-2xl font-medium gap-y-10">
        <label className="text-3xl text-theme-text-gray">
          Change Password:
        </label>

        <InputField
          value={currentPass}
          setValue={setCurrentPass}
          placeholder="Enter current password"
          extraCss={"w-[500px]"}
        />
        <InputField
          value={newPass}
          setValue={setNewPass}
          placeholder="Enter new password"
          extraCss={"w-[500px]"}
        />
        <InputField
          value={reNewPass}
          setValue={setReNewPass}
          placeholder="Enter confirm new password"
          extraCss={"w-[500px]"}
        />
      </div>
      <div className="flex space-x-4 items-end">
        <Button
          type={"submit"}
          label="Update Security"
          extraCss={"w-[250px] text-xl"}
        />
        <button
          className="text-2xl pb-2 w-[200px] font-medium text-theme-text-gray"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
