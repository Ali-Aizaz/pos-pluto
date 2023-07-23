import Head from 'next/head'

import { NavBarComponent, TabComponent } from 'components'
import { AddEmployeeContainer, ManageRolesContainer } from 'containers'

const tabs = [
  { name: 'Manage', tab: <ManageRolesContainer /> },
  { name: 'Add Employees', tab: <AddEmployeeContainer /> },
]

export default function Roles() {
  return (
    <>
      <Head>
        <title>Employees | Pos Pluto</title>
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
