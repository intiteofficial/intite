import { UserHeader } from "@/features/user/components/header"

export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <UserHeader />
      <div className="flex-1">{children}</div>
    </div>
  )
}
