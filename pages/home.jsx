import React from 'react';
import { CardContainer } from '../containers';
import {
  BarChartComponent,
  LineChartComponent,
  NavBarComponent,
} from '../components';

export default function Home() {
  return (
    <main className="flex ">
      <NavBarComponent />
      <section className="mt-20 flex w-full flex-col items-center space-y-10">
        <h1 className="text-4xl font-bold">DASHBOARD</h1>
        <CardContainer />
        <div className="flex w-full space-x-10 px-10 ">
          <BarChartComponent />
          <LineChartComponent />
        </div>
      </section>
    </main>
  );
}
