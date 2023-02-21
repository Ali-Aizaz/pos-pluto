import { useState } from "react";
import Button from "../button";
import ToggleSwitch from "./toggleSwitch";

export default function Notifications() {
  const [sound, setSound] = useState(false);
  const [lowInventory, setLowInventory] = useState(false);
  const [employeeLogin, setEmployeeLogin] = useState(false);
  const [sales, setSales] = useState(false);
  const [updates, setUpdates] = useState(false);
  const notifications = [
    {
      name: "Low inventory level",
      value: lowInventory,
      change: setLowInventory,
    },
    { name: "Employee login", value: employeeLogin, change: setEmployeeLogin },
    { name: "Sales", value: sales, change: setSales },
    { name: "System update", value: updates, change: setUpdates },
  ];
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
      <div className="flex flex-col space-y-4">
        <label className="text-2xl text-theme-text-gray font-medium">
          Notification sound
        </label>
        <ToggleSwitch value={sound} setValue={setSound} />
      </div>
      <div className="w-full py-10 border-t-4 mt-10 flex flex-col text-2xl font-medium gap-y-10">
        <label className="text-3xl text-theme-text-gray">
          Notification popups
        </label>
        {notifications.map((notification) => {
          return (
            <div key={notification.name} className="flex">
              <label className="w-[300px] text-black">
                {notification.name}
              </label>
              <ToggleSwitch
                value={notification.value}
                setValue={notification.change}
              />
            </div>
          );
        })}
      </div>
      <div className="flex space-x-4 items-end">
        <Button
          type={"submit"}
          label="Update Settings"
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
