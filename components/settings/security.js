import { useState } from "react";
import {
  ToggleSwitchComponent,
  LabeledInputComponent,
  ButtonComponent,
} from "components";

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
        <label className="text-xl text-theme-text-gray font-medium">
          2FA-TWO FACTOR AUTHENTICATION
        </label>
        <ToggleSwitchComponent value={TFAtoggle} setValue={setTFAtoggle} />
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
      <div className="w-full py-4 border-t-4 mt-10 flex flex-col text-lg font-medium gap-y-7">
        <label className="text-2xl text-theme-text-gray">
          Change Password:
        </label>

        <LabeledInputComponent
          value={currentPass}
          setValue={setCurrentPass}
          placeholder="Enter current password"
          extraCss={"w-[400px]"}
        />
        <LabeledInputComponent
          value={newPass}
          setValue={setNewPass}
          placeholder="Enter new password"
          extraCss={"w-[400px]"}
        />
        <LabeledInputComponent
          value={reNewPass}
          setValue={setReNewPass}
          placeholder="Enter confirm new password"
          extraCss={"w-[400px]"}
        />
      </div>
      <div className="flex space-x-4 items-end">
        <ButtonComponent
          type={"submit"}
          label="Update Security"
          extraCss={"w-[250px] text-xl"}
        />
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
