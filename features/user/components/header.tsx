import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/shared/components/ui/button"
import { Icons } from "@/shared/components/icons"
import { MainNav } from "@/shared/components/main-nav"
import { ThemeToggle } from "@/shared/components/theme-toggle"

export function UserHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between ">
        <section className="flex gap-3">
          <Icons.hamburger></Icons.hamburger>
          <Icons.search></Icons.search>
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
    </header>
  )
}
