import Head from 'next/head'

import React from 'react'

import { NavBarComponent, TabComponent } from 'components'
import { AddInventoryContainer, ManageInventoryContainer } from 'containers'

const tabs = [
  { name: 'Manage', tab: <ManageInventoryContainer /> },
  { name: 'Add', tab: <AddInventoryContainer /> },
]

const Inventory = () => (
  <>
    <Head>
      <title>Inventory | Pos Pluto</title>
      <meta name="description" content="Pos Pluto" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  </>
)

export default Inventory
