import { useRouter } from 'next/router'

import { useEffect } from 'react'

import TitleComponent from 'components/Title'

import Button from './Button'

function TabComponent({ tabs }) {
  const router = useRouter()

  const { tab } = router.query

  useEffect(() => {
    if (!tab) router.push({ query: { tab: tabs[0].name } })
  }, [tabs])

  return (
    <section className="pt-20 flex w-full flex-col items-center ">
      <TitleComponent title={tab} />
      <div className="flex w-full flex-col space-y-10 px-20 py-5">
        <div className="flex w-full space-x-4">
          {tabs.map((t) => (
            <Button key={t.name} title={tab} tabName={t.name} />
          ))}
        </div>
        {tabs.find((t) => t.name === tab)?.tab}
      </div>
    </section>
  )
}

export default TabComponent
