import React from "react"
import { Search } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet"

const HeaderSearch = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="transition-all cursor-pointer hover:text-primary"
        asChild
      >
        <Search></Search>
      </SheetTrigger>
      <SheetContent position={"left"} size={"full"}>
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

export default HeaderSearch
