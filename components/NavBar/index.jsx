import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import {
  EmployeesIcon,
  InventoryIcon,
  LogoutIcon,
  MagnifyingGlassIcon,
  SalesIcon,
  SettingsIcon,
} from '../Icons';
import NavBarButton from './Button';

function NavBar() {
  const [hover, setHover] = useState(false);
  return (
    <header
      onMouseOver={() => {
        setHover(true);
      }}
      onFocus={() => {
        setHover(true);
      }}
      onBlur={() => {
        setHover(false);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      className="sticky flex h-screen w-[100px] flex-col space-y-8 rounded-r-2xl bg-black px-4 text-white shadow-2xl shadow-black transition-[width] hover:w-[400px]"
    >
      <Link href="/home">
        <div className="mb-10 flex items-center -space-x-3 overflow-hidden pt-7">
          <Image src="/favicon.png" alt="logo" width={100} height={110} />
          <h1
            className={`whitespace-nowrap text-lg font-medium ${
              hover ? 'w-[100px]' : 'hidden w-0'
            }`}
          >
            POS PLUTO
          </h1>
        </div>
      </Link>
      <NavBarButton hover={hover} title="Home" href="/home">
        <MagnifyingGlassIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title="Inventory" href="/inventory">
        <InventoryIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title="Sales" href="/sales">
        <SalesIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title="Employees" href="roles">
        <EmployeesIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title="Settings" href="/settings">
        <SettingsIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title="Logout" href="/">
        <LogoutIcon />
      </NavBarButton>
    </header>
  );
}
export default NavBar;
