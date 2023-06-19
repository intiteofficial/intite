import React from "react"
import Image from "next/image"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const LgSwiperSlides = () => {
  return (
    <Swiper
      className="h-[calc(100vh-115px)]  w-full"
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      direction={"vertical"}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        stopOnLastSlide: true,
        waitForTransition: true,
      }}
      loop
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="relative">
        <Image
          src="/hero/lg/lg-one.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/hero/lg/lg-two.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>{" "}
      <SwiperSlide className="relative">
        <Image
          src="/hero/lg/lg-three.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/hero/lg/lg-four.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>
    </Swiper>
  )
}

export default LgSwiperSlides
