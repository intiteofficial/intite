"use client"

import React from "react"

import YouMayAlsoLikeCarousel from "./carousel"

const YouMayAlsoLike = () => {
  return (
    <div className="pt-12 pb-24 you-may-also-like-section bg-muted">
      <section className="container">
        <h2 className="pb-12 text-2xl font-medium text-center">
          You may also like
        </h2>
        <YouMayAlsoLikeCarousel></YouMayAlsoLikeCarousel>
      </section>
    </div>
  )
}

export default YouMayAlsoLike
