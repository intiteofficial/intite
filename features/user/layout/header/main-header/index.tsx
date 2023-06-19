import React from "react"
import Image from "next/image"

import { ThemeToggle } from "@/shared/components/theme-toggle"

import HeaderHamburgerMenu from "../header-hamburger"
import HeaderSearch from "../header-search"

const UserMainHeader = () => {
  return (
    <section className="border-b main-header-wrapper">
      <div className="container flex items-center justify-between h-16">
        <section className="flex gap-3 md:gap-6">
          <HeaderHamburgerMenu></HeaderHamburgerMenu>
          <HeaderSearch></HeaderSearch>
        </section>
        <section className="logo-section">
          <Image alt="Intite" src="/logo.svg" height={140} width={140}></Image>
        </section>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </section>
  )
}

export default UserMainHeader
