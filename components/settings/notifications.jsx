import { useState } from "react";
import {
  ToggleSwitchComponent,
  ButtonComponent,
  SubmitResetButtonComponent,
} from "@/components";

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
    <form className="flex flex-col text-gray" onSubmit={handleUpdate}>
      <div className="flex flex-col space-y-4">
        <label className="text-2xl font-medium text-gray">
          Notification sound
        </label>
        <ToggleSwitchComponent value={sound} setValue={setSound} />
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-10 border-t-4 py-10 text-2xl font-medium">
        <label className="text-3xl text-gray">Notification popups</label>
        {notifications.map((notification) => {
          return (
            <div key={notification.name} className="flex">
              <label className="w-[300px] text-black">
                {notification.name}
              </label>
              <ToggleSwitchComponent
                value={notification.value}
                setValue={notification.change}
              />
            </div>
          );
        })}
      </div>
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  );
}
