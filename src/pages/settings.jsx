import Head from 'next/head'

import { useContext } from 'react'

import { NavBarComponent, TabComponent } from 'components'
import { AccountSettingsContainer, SecuritySettingsContainer } from 'containers'
import UserDataContext from 'context/userData'

const tabs = [{ name: 'Login & Security', tab: <SecuritySettingsContainer /> }]
const ownerTabs = [
  { name: 'Account Setting', tab: <AccountSettingsContainer /> },
  { name: 'Login & Security', tab: <SecuritySettingsContainer /> },
]

export default function Settings() {
  const { userData } = useContext(UserDataContext)

  return (
    <>
      <Head>
        <title>Settings | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex w-full">
        <NavBarComponent />
        <TabComponent
          tabs={userData.role === 'STOREOWNER' ? ownerTabs : tabs}
        />
      </main>
    </>
  )
}
