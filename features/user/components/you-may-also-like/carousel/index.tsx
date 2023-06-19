import Image from "next/image"
import { Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { images } from "@/lib/images"

const YouMayAlsoLikeCarousel = () => {
  return (
    <Swiper
      className="w-full h-96"
      spaceBetween={30}
      breakpoints={{
        1200: { slidesPerView: 4.5 },
      }}
      slidesPerView={1.5}
    >
      {images.map((image) => (
        <SwiperSlide className="relative" key={image.src}>
          <Image
            src={image.src}
            className="object-cover"
            fill
            alt="hero"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default YouMayAlsoLikeCarousel
