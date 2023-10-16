"use client"

import Header from '#/components/Header';
import Footer from '#/components/Footer';
import useTranslation from 'next-translate/useTranslation';
import { useParams } from 'next/navigation';
import { Service, Testimony } from '#/api/models';
import Title from '#/components/Title';
import Section from '#/components/Section';
import SwiperCarousel from '#/components/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Gallery from '#/components/Gallery';

const Service: React.FunctionComponent = () => {
  const { t } = useTranslation('common');
  const { slug } = useParams();
  const services: any = t("services.services-provided", {}, { returnObjects: true });
  const currentService: Service = services.find((service: Service) => service.slug === slug);

  return (
    <>
      <Header />
      <div className="flex bg-white mt-16 flex-col lg:flex-row">
        <div className="pt-20 pb-8 lg:pb-20 text-zinc-900 container">
          <Title align="text-left">{currentService.name}</Title>
          <p>{currentService.description}</p>
        </div>
        <div 
          className="w-full mb-20 lg:mb-0 h-80 lg:h-96 bg-center bg-cover rounded-tl-full rounded-br-full" 
          style={{backgroundImage: `url(${currentService.images.banner})`}}
        >
        </div>
      </div>
      <Section backgroundColor="bg-slate-200">
        <div className="container relative">
          <Title align="text-center">{t("step")}</Title>
          <SwiperCarousel centeredSlides={true} sliderPerView={{ sm: 1.2, md: 2.2, lg: 4 }}>
          {currentService.steps?.map((step: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="card bg-base-100 shadow-xl min-h-max">
                    <div className="card-body flex flex-row items-center">
                      <span className="text-white bg-green-600 rounded-full px-2 font-bold text-2xl w-8 h-8">{index + 1}</span> 
                      <h3 className="card-title flex-1 my-2 ml-2">{step}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              )})}
          </SwiperCarousel>
        </div>
      </Section>
      <Section backgroundColor="bg-white">
        <Gallery />
      </Section>
      <Section backgroundColor="bg-slate-200">
          <div className="container relative">
            <SwiperCarousel sliderPerView={{ sm: 1, md: 1, lg: 1 }}>
              {currentService.testimonials?.map((testimony: Testimony, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center text-center text-gray-600">
                      <Image
                        src="/testimony-icon.svg"
                        alt=""
                        className="m-auto"
                        width={50}
                        height={0}
                        priority
                      />
                      <span className="text-2xl lg:text-4xl p-8 font-bold">{testimony.testimony}</span>
                      <span className="font-semibold">{testimony.name}</span>
                      <span className="text-sm">{testimony.office}</span>
                    </div>  
                  </SwiperSlide>
                )})}
            </SwiperCarousel>
          </div>
      </Section>
      <Footer />     
    </>
  ) 
}

export default Service;