import { NavBarComponent, TabComponent } from 'components'
import {
  AccountSettingsContainer,
  NotificationSettingsContainter,
  SecuritySettingsContainer,
} from 'containers'
import ProtectContainer from 'containers/Protect'

const tabs = [
  { name: 'Account Setting', tab: <AccountSettingsContainer /> },
  { name: 'Login & Security', tab: <SecuritySettingsContainer /> },
  { name: 'Notifications', tab: <NotificationSettingsContainter /> },
]

export default function Settings() {
  return (
    <ProtectContainer>
      <main className="flex w-full">
        <NavBarComponent />
        <TabComponent tabs={tabs} />
      </main>
    </ProtectContainer>
  )
}
