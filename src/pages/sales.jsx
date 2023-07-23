import Head from 'next/head'

import { NavBarComponent, TabComponent } from 'components'
import Return from 'containers/Return'
import OrderContainer from 'containers/SaleOrder'
import SalesContainer from 'containers/Sales'

const tabs = [
  { name: 'Order', tab: <OrderContainer /> },
  { name: 'Return', tab: <Return /> },
  { name: 'Sales History', tab: <SalesContainer /> },
]
export default function Sales() {
  return (
    <>
      <Head>
        <title>Sales | Pos Pluto</title>
        <meta name="description" content="Pos Pluto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex w-full">
        <NavBarComponent />
        <TabComponent tabs={tabs} />
      </main>
    </>
  )
}
