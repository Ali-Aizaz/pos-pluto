import Order from "../components/sales/order";
import Return from "../components/sales/return";
import SalesHistory from "../components/sales/salesHistory";
import { NavBarComponent, TabComponent } from "@/components";
const tabs = [
  { name: "Order", tab: <Order /> },
  { name: "Return", tab: <Return /> },
  { name: "Sales History", tab: <SalesHistory /> },
];
export default function Sales() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  );
}
