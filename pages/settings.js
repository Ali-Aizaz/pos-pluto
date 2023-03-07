import Navbar from "../components/navbar";
import AccountSetting from "../components/settings/account";
import SecuritySettings from "../components/settings/security";
import Notifications from "../components/settings/notifications";
import { TabComponent } from "components";
const tabs = [
  { name: "Account Setting", tab: <AccountSetting /> },
  { name: "Login & Security", tab: <SecuritySettings /> },
  { name: "Notifications", tab: <Notifications /> },
];

export default function Settings() {
  return (
    <main className="flex w-full">
      <Navbar />
      <TabComponent tabs={tabs} />
    </main>
  );
}
