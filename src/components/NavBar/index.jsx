import Image from 'next/image'
import Link from 'next/link'

import { useCallback, useState } from 'react'

import classNames from 'classnames'
import {
  EmployeesIcon,
  InventoryIcon,
  LogoutIcon,
  MagnifyingGlassIcon,
  SalesIcon,
  SettingsIcon,
} from 'components/Icons'

import NavBarButton from './Button'

function NavBar() {
  const [hover, setHover] = useState(false)

  const handleLogout = useCallback(() => {
    localStorage.removeItem('Pluto')
    window.location.reload()
  }, [])

  return (
    <header
      onMouseOver={() => {
        setHover(true)
      }}
      onFocus={() => {
        setHover(true)
      }}
      onBlur={() => {
        setHover(false)
      }}
      onMouseOut={() => {
        setHover(false)
      }}
      className="sticky flex h-screen w-[100px] flex-col space-y-8 rounded-r-2xl bg-black px-4 text-white shadow-2xl shadow-black ease-in-out transition-[width] hover:w-[400px]"
    >
      <Link href="/home">
        <div className="mb-10 flex items-center -space-x-3 overflow-hidden pt-7">
          <Image src="/favicon.png" alt="logo" width={100} height={110} />
          <h1
            className={classNames('whitespace-nowrap text-lg font-medium', {
              'w-[100px]': hover,
              'hidden w-0': !hover,
            })}
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
      <button
        onClick={handleLogout}
        type="button"
        className="mb-10 ml-3 flex space-x-8 items-center overflow-hidden"
      >
        <LogoutIcon />
        <h1
          className={classNames('whitespace-nowrap text-2xl font-medium', {
            'w-[100px]': hover,
            'hidden w-0': !hover,
          })}
        >
          Logout
        </h1>
      </button>
    </header>
  )
}
export default NavBar
