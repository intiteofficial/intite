import React from "react"
import Link from "next/link"

const UserSubHeader = () => {
  return (
    <section className="hidden border-b sub-header-wrapper md:block">
      <div className="container flex items-center justify-between h-12">
        <ul className="container flex items-center justify-around px-12 mx-auto lg:px-24">
          <li>
            <Link className="text-sm bottom-header-link" href="/">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="text-sm bottom-header-link" href="/">
              Lingerie
            </Link>
          </li>
          <li>
            <Link className="text-sm bottom-header-link" href="/">
              Bras
            </Link>
          </li>

          <li>
            <Link className="text-sm bottom-header-link" href="/">
              Panties
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UserSubHeader
