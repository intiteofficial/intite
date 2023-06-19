import { UserHeader } from "@/features/user/layout/header"

export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <UserHeader />
      <div className="flex-1">{children}</div>
    </div>
  )
}
