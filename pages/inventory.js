import Navbar from "../components/navbar";
import Add from "../components/inventory/add";
import Manage from "../components/inventory/manage";
import { TabComponent } from "components";
const tabs = [
  { name: "Manage", tab: <Manage /> },
  { name: "Add", tab: <Add /> },
];
export default function Inventory() {
  return (
    <main className="flex w-full">
      <Navbar />
      <TabComponent tabs={tabs} />
    </main>
  );
}
