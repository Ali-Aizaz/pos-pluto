import React from 'react'

import { NavBarComponent, TabComponent } from 'components'
import { AddInventoryContainer, ManageInventoryContainer } from 'containers'
import ProtectContainer from 'containers/Protect'

const tabs = [
  { name: 'Manage', tab: <ManageInventoryContainer /> },
  { name: 'Add', tab: <AddInventoryContainer /> },
]

export default function Inventory() {
  return (
    <ProtectContainer>
      <main className="flex w-full">
        <NavBarComponent />
        <TabComponent tabs={tabs} />
      </main>
    </ProtectContainer>
  )
}
