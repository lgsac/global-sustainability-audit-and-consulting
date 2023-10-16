import React, { ReactNode } from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import SwiperCarousel from '../SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

const imgsGallery: string[] = [
  "/img/banner-consultoria.webp",
  "/img/benson-hill-proterra.webp",
  "/img/consulting.webp",
  "/img/hero-background.webp",
  "/img/home-working-1.webp",
  "/img/home-working-2.webp",
  "/img/home-working-3.webp",
  "/img/home-working-4.webp"
]

const Gallery: React.FunctionComponent = () => {

  return (
    <div className="container relative">
      <SwiperCarousel sliderPerView={{ sm: 1.1, md: 2.2, lg: 3 }}>
        {imgsGallery.map((imgPath: string, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div 
                className="h-72 bg-center bg-cover rounded-lg" 
                style={{backgroundImage: `url(${imgPath})`}}
              ></div>
              
            </SwiperSlide>
          )})}
      </SwiperCarousel>
    </div>
  );
}

export default Gallery;