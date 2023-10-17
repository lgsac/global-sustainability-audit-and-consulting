"use client"

import Header from '#/components/Header';
import Footer from '#/components/Footer';
import HeroBanner from '#/components/HeroBanner';
import About from '#/components/About';
import ServicesProvided from '#/components/ServicesProvided';
import Title from '#/components/Title';
import {useTranslations} from 'next-intl';import Section from '#/components/Section';
import SwiperCarousel from '#/components/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Article } from '#/api/models';
import Link from 'next/link';

const Home: React.FunctionComponent = () => {
  const t = useTranslations();
  const article = useTranslations("news.articles");
  const articles = ["fiji", "minuano" ] as string[]

  const certifications = [
    "Padrão Bonsucro",
    "FoodChain ID Non-GMO",
    "FSA (Avaliação de sustentabilidade agrícola)",
    "Padrão ProTerra",
    "RSPO",
    "RTRS (The Round Table on Responsible Soy)",
    "SAC 2017",
    "ISCC (The International Sustainability and Carbon Certification)"
  ];

  const logosPath = [
    "/control-union-logo.svg",
    "/FCID-logo.svg",
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
                  <div className="card bg-slate-200 shadow-xl min-h-max">
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
      <Section backgroundColor="bg-slate-200" sectionId={t("menu.clients-id")}>
        <div className="container relative">
          <Title align="text-center">{t("clients.title")}</Title>
          <div className="flex justify-center items-center flex-col lg:flex-row space-x-0 lg:space-x-9">
            {logosPath.map((path: string, index: number) => {
              return (
                <Image
                  key={index}
                  alt=""
                  src={path}
                  className="mt-8 lg:mt-0"
                  width={200}
                  height={0}
                />
              )
            })}
          </div>
        </div>
      </Section>
      <Section backgroundColor="bg-white">
        <div className="container">
          <Title align="text-center">{t("news.title")}</Title>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 justify-center">
            {articles.map((value: string, index: number) => {
              return (
                <div key={index} className="card w-full lg:w-96 bg-base-100 shadow-xl mt-6 lg: mt-0">
                  <figure className="h-60 bg-center bg-cover" style={{backgroundImage: `url(${article(value + ".image")})`}}>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{article(`${value}.title`)}</h2>
                    <p>{article(`${value}.description`)}</p>
                    <Link href={article(`${value}.url`)} target="_blank" className="mt-4">
                      <button className="btn bg-green-600 btn-block text-white hover:bg-green-500">{t("view-more")}</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>          
      </Section>
      <Footer />     
    </>
  ) 
}

export default Home;
