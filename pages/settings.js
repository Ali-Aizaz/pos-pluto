import AccountSetting from "../components/settings/account";
import SecuritySettings from "../components/settings/security";
import Notifications from "../components/settings/notifications";
import { NavBarComponent, TabComponent } from "components";
const tabs = [
  { name: "Account Setting", tab: <AccountSetting /> },
  { name: "Login & Security", tab: <SecuritySettings /> },
  { name: "Notifications", tab: <Notifications /> },
];

export default function Settings() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  );
}
