import { NavBarComponent, TabComponent } from "@/components";
import AddEmployee from "../components/roles/addEmployee";
import Manage from "../components/roles/manage";

const tabs = [
  { name: "Manage", tab: <Manage /> },
  { name: "Add Employees", tab: <AddEmployee /> },
];

export default function Roles() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  );
}
