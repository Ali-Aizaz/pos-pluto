import { useState } from "react";
import Navbar from "../components/navbar";
import AddEmployee from "../components/roles/addEmployee";
import Manage from "../components/roles/manage";

const tabs = ["Manage", "Add Employees"];

export default function Roles() {
  const [tab, setTab] = useState(tabs[0]);
  const handleTabs = (t) => {
    setTab(t);
  };

  const handleTab = () => {
    switch (tab) {
      case "Manage":
        return <Manage />;
      case "Add Employees":
        return <AddEmployee />;
      default:
        break;
    }
  };
  return (
    <main className="flex w-full">
      <Navbar />
      <section className="w-full flex flex-col items-center mt-20 ">
        <h1 className="text-5xl font-bold flex">{tab}</h1>
        <div className="w-full flex flex-col  px-20 py-5 space-y-10">
          <div className="w-full flex space-x-4">
            {tabs.map((t) => {
              return (
                <button
                  key={t}
                  onClick={() => handleTabs(t)}
                  className={`text-xl text-center border-b-4 transition-color font-semibold duration-300 p-3 w-[200px] ${
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
          {handleTab()}
        </div>
      </section>
    </main>
  );
}
