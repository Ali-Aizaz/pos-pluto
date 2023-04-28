import { CardContainer } from "@/containers";

import {
  BarChartComponent,
  LineChartComponent,
  NavBarComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="flex ">
      <NavBarComponent />
      <section className="w-full flex flex-col items-center mt-20 space-y-10">
        <h1 className="text-4xl font-bold">DASHBOARD</h1>
        <CardContainer />
        <div className="flex w-full px-10 space-x-10 ">
          <BarChartComponent />
          <LineChartComponent />
        </div>
      </section>
    </main>
  );
}
