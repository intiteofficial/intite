import React from "react"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet"

const HeaderHamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="transition-all cursor-pointer hover:text-primary"
        asChild
      >
        <Menu></Menu>
      </SheetTrigger>
      <SheetContent position={"left"} size={"default"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderHamburgerMenu
