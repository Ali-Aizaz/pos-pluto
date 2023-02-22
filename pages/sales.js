import Navbar from "../components/navbar";
import Order from "../components/sales/order";
import { useState } from "react";
import Return from "../components/sales/return";
const tabs = ["Order", "Return"];
export default function Sales() {
  const [tab, setTab] = useState("Order");
  const handleTabs = (t) => {
    setTab(t);
  };

  const handleTab = () => {
    switch (tab) {
      case "Order":
        return <Order />;
      case "Return":
        return <Return />;
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
