import { useState } from "react";
import Navbar from "../components/navbar";
import AccountSetting from "../components/settings/account";

const tabs = ["Account Setting", "Login & Security", "Notifications"];

export default function Settings() {
  const [tab, setTab] = useState("Account Setting");
  const handleTabs = (t) => {
    setTab(t);
  };
  return (
    <main className="flex w-full">
      <Navbar />
      <section className="w-full flex flex-col items-center mt-20 ">
        <h1 className="text-5xl font-bold flex">SETTINGS</h1>
        <div className="w-full flex flex-col  px-20 py-5 space-y-10">
          <div className="w-full flex space-x-4">
            {tabs.map((t) => {
              return (
                <button
                  key={t}
                  onClick={() => handleTabs(t)}
                  className={`text-3xl text-center border-b-4 transition-color font-semibold duration-300 p-3 w-[300px] ${
                    tab === t
                      ? "text-theme-purple border-theme-purple "
                      : "text-theme-light-gray"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <AccountSetting />
        </div>
      </section>
    </main>
  );
}
