import Head from 'next/head'

import { NavBarComponent } from 'components'
import { CardContainer } from 'containers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex">
        <NavBarComponent />
        <section className="mt-20 flex w-full flex-col items-center">
          <h1 className="text-4xl font-bold ">DASHBOARD</h1>
          <CardContainer />
          <div className="flex w-full space-x-10 px-10 ">
            {/* <BarChartComponent /> */}
            {/* <LineChartComponent /> */}
          </div>
        </section>
      </main>
    </>
  )
}
