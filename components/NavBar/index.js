import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  MagnifyingGlassIcon,
  EmployeesIcon,
  InventoryIcon,
  LogoutIcon,
  SalesIcon,
  SettingsIcon,
} from "@/Icons";

import NavBarButton from "./Button";

const NavBar = () => {
  const [hover, setHover] = useState(false);
  return (
    <header
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      className="bg-theme-black text-white px-4 w-[100px] h-screen hover:w-[400px] transition-[width] rounded-r-2xl shadow-2xl sticky flex flex-col space-y-8 shadow-black"
    >
      <Link href={"/home"}>
        <div className="flex items-center pt-7 overflow-hidden -space-x-3 mb-10">
          <Image src={"/favicon.png"} alt="logo" width={100} height={110} />
          <h1
            className={`text-lg whitespace-nowrap font-medium ${
              hover ? "w-[100px]" : "w-0 hidden"
            }`}
          >
            POS PLUTO
          </h1>
        </div>
      </Link>
      <NavBarButton hover={hover} title={"Home"} href={"/home"}>
        <MagnifyingGlassIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title={"Inventory"} href={"/inventory"}>
        <InventoryIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title={"Sales"} href={"/sales"}>
        <SalesIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title={"Employees"} href={"roles"}>
        <EmployeesIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title={"Settings"} href={"/settings"}>
        <SettingsIcon />
      </NavBarButton>
      <NavBarButton hover={hover} title={"Logout"} href={"/"}>
        <LogoutIcon />
      </NavBarButton>
    </header>
  );
};
export default NavBar;
