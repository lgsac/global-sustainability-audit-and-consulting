import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, A11y} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import Image from 'next/image';

type SliderPerViewProps = {
  sm: number;
  md: number;
  lg: number
}

type SwiperCarouselProps = {
  children: ReactNode ;
  sliderPerView: SliderPerViewProps;
  centeredSlides?: boolean;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({ children, sliderPerView, centeredSlides }) =>  {

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
        centeredSlides={centeredSlides}
        autoHeight={true}
        spaceBetween={15}
        breakpoints={{
          480: {
            slidesPerView: sliderPerView.sm,
          },
          720: {
            slidesPerView: sliderPerView.md,
          },
          1080: {
            slidesPerView: sliderPerView.lg,
          }
        }}
      >
        {children}
      </Swiper>
    </>
  )
};

export default SwiperCarousel;