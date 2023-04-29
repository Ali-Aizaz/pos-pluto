import React, { useState } from 'react'

import TitleComponent from 'components/Title'

import Button from './Button'

function TabComponent({ tabs }) {
  const [tab, setTab] = useState(tabs[0])
  const handleTabs = (t) => {
    setTab(t)
  }
  return (
    <section className="mt-20 flex w-full flex-col items-center ">
      <TitleComponent title={tab.name} />
      <div className="flex w-full flex-col  space-y-10 px-20 py-5">
        <div className="flex w-full space-x-4">
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
  )
}

export default TabComponent
