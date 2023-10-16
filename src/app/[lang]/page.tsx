"use client"

import Header from '#/components/Header';
import Footer from '#/components/Footer';
import HeroBanner from '#/components/HeroBanner';
import About from '#/components/About';
import ServicesProvided from '#/components/ServicesProvided';
import Title from '#/components/Title';
import useTranslation from 'next-translate/useTranslation';
import Section from '#/components/Section';
import SwiperCarousel from '#/components/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation('common');

  const certifications = [
    "Padrão Bonsucro",
    "FoodChain ID Non-GMO",
    "FSA (Avaliação de sustentabilidade agrícola)",
    "Padrão ProTerra",
    "RSPO",
    "RTRS (The Round Table on Responsible Soy)",
    "SAC 2017",
    "ISCC (The International Sustainability and Carbon Certification)"
  ]

  return (
    <>
      <Header />     
      <HeroBanner />
      <About />
      <ServicesProvided />
      <div className="flex bg-slate-200 flex-col lg:flex-row">
        <div className="pt-20 pb-8 lg:pb-20 text-zinc-900 container">
          <Title align="text-left">{t("certification.importance-title")}</Title>
          <p className="text-sm">{t("certification.description")}</p>
        </div>
        <div 
          className="w-full lg:w-4/5 mb-20 lg:mb-0 h-80 lg:h-96 bg-center bg-cover rounded-tl-full rounded-br-full" 
          style={{backgroundImage: `url(/img/soja.webp)`}}
        >
        </div>
      </div>
      <Section backgroundColor="bg-white" sectionId={t("menu.certifications-id")}>
        <div className="container relative">
          <Title align="text-center">{t("certification.certification-title")}</Title>
          <SwiperCarousel sliderPerView={{ sm: 1.7, md: 2.5, lg: 4.5 }}>
            {certifications.map((certification: string, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <div className="card bg-base-100 shadow-xl min-h-max">
                    <div className="card-body flex flex-row items-center">
                      <h3 className="card-title flex-1 my-2 ml-2">{certification}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </SwiperCarousel>
        </div>
      </Section>
      <Footer />     
    </>
  ) 
}

export default Home;
