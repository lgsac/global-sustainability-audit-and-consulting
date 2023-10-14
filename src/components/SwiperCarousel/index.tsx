import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, A11y} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import Image from 'next/image';

type SwiperCarouselProps = {
  children: ReactNode ;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ children }) =>  {

  return(
    <>
      <div className="swiper-button swiper-btn-next">
        <Image
          src="/next-button.svg"
          alt=""
          width={30}
          height={0}
          priority
        />
      </div>
      <div className="swiper-button swiper-btn-prev">
        <Image
          src="/prev-button.svg"
          alt=""
          width={30}
          height={0}
          priority
        />
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
          disabledClass: ".swiper-btn-disabled"
        }}
        autoHeight={true}
        spaceBetween={15}
        breakpoints={{
          600: {
            slidesPerView: 1.3,
          },
          800: {
            slidesPerView: 2.3,
          },
          1080: {
            slidesPerView: 3,
          }
        }}
      >
        {children}
      </Swiper>
    </>
  )
};

export default SwiperCarousel;