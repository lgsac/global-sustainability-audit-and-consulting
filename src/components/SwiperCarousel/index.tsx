import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, A11y} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef } from 'react';

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

  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return(
    <>
      <div className="swiper-button swiper-btn-next" ref={nextRef}>
        <Image
          src="/next-button.svg"
          alt=""
          width={30}
          height={0}
          priority
        />
      </div>
      <div className="swiper-button swiper-btn-prev" ref={prevRef}>
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
          nextEl: nextRef.current,
          prevEl: prevRef.current,
          disabledClass: ".swiper-btn-disabled"
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        centeredSlides={centeredSlides}
        autoHeight={false}
        spaceBetween={15}
        breakpoints={{
          300: {
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