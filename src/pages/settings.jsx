import { NavBarComponent, TabComponent } from 'components'
import AccountSetting from 'components/Settings/account'
import Notifications from 'components/Settings/notifications'
import SecuritySettings from 'components/Settings/security'

const tabs = [
  { name: 'Account Setting', tab: <AccountSetting /> },
  { name: 'Login & Security', tab: <SecuritySettings /> },
  { name: 'Notifications', tab: <Notifications /> },
]

export default function Settings() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  )
}
