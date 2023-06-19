"use client"

import React from "react"
import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import LgSwiperSlides from "./lg-swiper-slides"
import SmSwiperSlides from "./sm-swiper-slides"

const HeroCarousel = () => {
  return (
    <div className="w-full carousel-section">
      <section className="block md:hidden">
        <SmSwiperSlides></SmSwiperSlides>
      </section>
      <section className="hidden md:block">
        <LgSwiperSlides></LgSwiperSlides>
      </section>
    </div>
  )
}

export default HeroCarousel
