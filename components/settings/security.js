import { useState } from "react";
import InputField from "./inputField";
import Button from "../button";
import ToggleSwitch from "./toggleSwitch";
export default function SecuritySettings() {
  const [TFA, setTFA] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [TFAtoggle, setTFAtoggle] = useState(false);
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
        <ToggleSwitch value={TFAtoggle} setValue={setTFAtoggle} />
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