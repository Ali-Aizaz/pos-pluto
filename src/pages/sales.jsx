import { NavBarComponent, TabComponent } from 'components'
import Return from 'components/Sales/return'
import SalesHistory from 'components/Sales/salesHistory'
import OrderContainer from 'containers/SaleOrder'

const tabs = [
  { name: 'Order', tab: <OrderContainer /> },
  { name: 'Return', tab: <Return /> },
  { name: 'Sales History', tab: <SalesHistory /> },
]
export default function Sales() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  )
}
