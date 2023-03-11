import Add from "../components/inventory/add";
import Manage from "../components/inventory/manage";
import { NavBarComponent, TabComponent } from "@/components";
const tabs = [
  { name: "Manage", tab: <Manage /> },
  { name: "Add", tab: <Add /> },
];
export default function Inventory() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  );
}
