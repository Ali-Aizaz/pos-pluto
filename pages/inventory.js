import Navbar from "../components/navbar";
import Add from "../components/inventory/add";
import { useState } from "react";
import Manage from "../components/inventory/manage";

const tabs = ["Manage", "Add"];
export default function Inventory() {
  const [tab, setTab] = useState(tabs[0]);
  const handleTabs = (t) => {
    setTab(t);
  };

  const handleTab = () => {
    switch (tab) {
      case "Manage":
        return <Manage />;
      case "Add":
        return <Add />;
      default:
        break;
    }
  };

  return (
    <main className="flex w-full">
      <Navbar />
      <section className="w-full flex flex-col items-center mt-20 ">
        <h1 className="text-4xl font-bold flex uppercase">{tab}</h1>
        <div className="w-full flex flex-col  px-20 py-5 space-y-10">
          <div className="w-full flex space-x-4">
            {tabs.map((t) => {
              return (
                <button
                  key={t}
                  onClick={() => handleTabs(t)}
                  className={`text-xl text-center border-b-4 transition-color font-semibold duration-300 p-3 w-[150px] ${
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
