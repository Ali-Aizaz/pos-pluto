import React from 'react'

import { NavBarComponent, TabComponent } from 'components'
import { AddInventoryContainer, ManageInventoryContainer } from 'containers'

const tabs = [
  { name: 'Manage', tab: <ManageInventoryContainer /> },
  { name: 'Add', tab: <AddInventoryContainer /> },
]

export default function Inventory() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  )
}
