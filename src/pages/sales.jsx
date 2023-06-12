import { NavBarComponent, TabComponent } from 'components'
import Order from 'components/Sales/order'
import Return from 'components/Sales/return'
import SalesHistory from 'components/Sales/salesHistory'

const tabs = [
  { name: 'Order', tab: <Order /> },
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
