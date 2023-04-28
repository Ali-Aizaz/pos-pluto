import React from 'react';
import { NavBarComponent, TabComponent } from '../components';
import { ManageRolesContainer } from '../containers';
import AddEmployee from '../components/Roles/addEmployee';

const tabs = [
  { name: 'Manage', tab: <ManageRolesContainer /> },
  { name: 'Add Employees', tab: <AddEmployee /> },
];

export default function Roles() {
  return (
    <main className="flex w-full">
      <NavBarComponent />
      <TabComponent tabs={tabs} />
    </main>
  );
}
