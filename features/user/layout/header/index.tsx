import UserMainHeader from "./main-header"
import UserSubHeader from "./sub-header"

export function UserHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <UserMainHeader></UserMainHeader>
      <UserSubHeader></UserSubHeader>
    </header>
  )
}
