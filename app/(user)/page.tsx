import Link from "next/link"
import HeroCarousel from "@/features/user/components/hero-carousel"
import YouMayAlsoLike from "@/features/user/components/you-may-also-like"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/shared/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <YouMayAlsoLike></YouMayAlsoLike>
    </>
  )
}
