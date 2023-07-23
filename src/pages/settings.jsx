import Head from 'next/head'

import { NavBarComponent, TabComponent } from 'components'
import {
  AccountSettingsContainer,
  NotificationSettingsContainter,
  SecuritySettingsContainer,
} from 'containers'

const tabs = [
  { name: 'Account Setting', tab: <AccountSettingsContainer /> },
  { name: 'Login & Security', tab: <SecuritySettingsContainer /> },
  { name: 'Notifications', tab: <NotificationSettingsContainter /> },
]

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex w-full">
        <NavBarComponent />
        <TabComponent tabs={tabs} />
      </main>
    </>
  )
}
