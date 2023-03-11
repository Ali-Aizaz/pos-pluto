import { NavBarComponent, TabComponent } from "@/components";
import AddEmployee from "../components/roles/addEmployee";
import { ManageRolesContainer } from "@/containers";

const tabs = [
  { name: "Manage", tab: <ManageRolesContainer /> },
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
