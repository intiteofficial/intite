import React from "react"
import Image from "next/image"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const SmSwiperSlides = () => {
  return (
    <Swiper
      className="h-[calc(100vh-65px)]  w-full"
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
          src="/hero/sm/sm-one.jpg"
          className="object-cover"
          fill
          alt="hero"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/hero/sm/sm-two.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>{" "}
      <SwiperSlide className="relative">
        <Image
          src="/hero/sm/sm-three.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/hero/sm/sm-four.jpg"
          className="object-cover"
          fill
          alt="hero"
        ></Image>
      </SwiperSlide>
    </Swiper>
  )
}

export default SmSwiperSlides
