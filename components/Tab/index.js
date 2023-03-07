import { useState } from "react";
import Button from "./Button";
import { TitleComponent } from "components";
const Tab = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0]);
  const handleTabs = (t) => {
    setTab(t);
  };
  return (
    <section className="w-full flex flex-col items-center mt-20 ">
      <TitleComponent title={tab.name} />
      <div className="w-full flex flex-col  px-20 py-5 space-y-10">
        <div className="w-full flex space-x-4">
          {tabs.map((t) => (
            <Button
              key={t.name}
              title={tab.name}
              tabName={t.name}
              onClick={() => handleTabs(t)}
            />
          ))}
        </div>
        {tab.tab}
      </div>
    </section>
  );
};

export default Tab;
