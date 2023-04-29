import { NavBarComponent, TabComponent } from 'components'
import { AddEmployeeContainer, ManageRolesContainer } from 'containers'

const tabs = [
  { name: 'Manage', tab: <ManageRolesContainer /> },
  { name: 'Add Employees', tab: <AddEmployeeContainer /> },
]

export default function Roles() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  )
}
