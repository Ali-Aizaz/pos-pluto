import {
  CardComponent,
  BarChartComponent,
  LineChartComponent,
} from "components";
import Navbar from "../components/navbar";
const cards = [
  {
    tag: "This week Sales",
    price: "10k Sales",
    caption: "Balance sheet",
    image: "/discount.png",
    color: "#0BF4C8",
  },
  {
    tag: "Orders in Line",
    price: "750",
    caption: "view Sales history",
    image: "/bags.png",
    color: "#FAD85D",
  },
  {
    tag: "Total Employees",
    price: "50",
    caption: "View all Employees",
    image: "/woman.png",
    color: "#7A99EA",
  },
];

export default function Home() {
  return (
    <main className="flex ">
      <Navbar />
      <section className="w-full flex flex-col items-center mt-20 space-y-10">
        <h1 className="text-4xl font-bold">DASHBOARD</h1>
        <div className="w-full  ">
          <h1 className="text-2xl mb-6 ml-10">Hello, Raheel</h1>
          <div className="flex w-full justify-start flex-wrap ">
            {cards.map((card) => (
              <CardComponent key={card.tag} card={card} />
            ))}
          </div>
        </div>
        <div className="flex w-full px-10 space-x-10 ">
          <BarChartComponent />
          <LineChartComponent />
        </div>
      </section>
    </main>
  );
}
