"use client"

import React from 'react';
import Title from '../Title';
import Section from '../Section';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { EXPERIENCE_TYPE } from '#/api/enums';
import SwiperCarousel from '../SwiperCarousel';
import { formatPeriod } from '#/utils/date';
import { useTranslations, useLocale } from 'next-intl';
import { Hashmap } from '#/api/models';

const About = () =>  {
  const lang = useLocale();
  const t = useTranslations();
  const quality = useTranslations("about.ceo.qualities");
  const qualities = [ "0", "1", "2", "3", '4', "5", "6", "7", "8" ] as const;
  const experience = useTranslations("about.ceo.curriculum.experiences");
  const experiences = [ 
    "computing", 
    "agronomist", 
    "agronomy", 
    "specialization",
    "supervisor", 
    "field", 
    "lead",
    "management",
    "auditor",
    "courses" 
  ] as const;

  const getActivitieEntries: Hashmap<string[]> = {
    agronomist: ["0", "1", "2", "3"],
    supervisor: ["0", "1", "2", "3", "4"],
    field: ["0", "1"],
    lead: ["0", "1", "2"],
    management: ["0", "1", "2", "3"],
    auditor: ["0", "1", "2", "3"],
    courses: ["0", "1", "2", "3","4", "5", "6", "7","8", "9", "10", "11","12", "13", "14", "15"],
  };

  return(
    <Section backgroundColor="bg-white" sectionId={t("menu.about-id")}>
      <div className="container relative z-20 lg:inherit xl:relative mb-0 lg:mb-36 xl:mb-0">
        <Title align="text-left">{t("title")}</Title>
        <p>{t("about.description")}</p>
        <div className="flex flex-col lg:flex-row">
          <div className="mt-10">
            <Title align="text-left">{t("about.ceo.title")}</Title>
            <ul className="marker:text-green-600 list-disc pl-5 space-y-2">
              {qualities.map((value: string, i: number) => (
                <li key={i}>{quality(value)}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              src="/img/leandro-garcia.webp"
              alt="Leandro Garcia"
              className="my-16 lg:mt-20 lg:mb-0"
              width={360}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="-mt-8 xl:-mt-28 absolute items-center justify-center flex mr-3 md:mr-0">
          <span className="text-white bg-green-600 py-3 px-8 rounded">{t("about.ceo.member")}</span>
          <Image
            src="/list.svg"
            alt="ícone certificado"
            className="bg-green-600 p-4 -ml-4 rounded-lg hidden md:flex"
            width={70}
            height={0}
            priority
          />
        </div>
      </div>
      <div className="bg-slate-200 py-20 text-zinc-900 relative z-10 mt-0 lg:-mt-20">
        <div className="container">
          <Title align="text-left">{t("about.ceo.curriculum.title")}</Title>
          <SwiperCarousel sliderPerView={{ sm: 1.2, md: 2.3, lg: 3 }}>
            {experiences.map((value: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-xl min-h-max">
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-2xl">{experience(`${value}.period.ingress`).slice(0, 4)}</span>
                      <Image
                        src={experience(`${value}.type`) === EXPERIENCE_TYPE.WORK ? "/work.svg" : "/education.svg" }
                        alt=""
                        className="bg-green-600 p-2 rounded-lg"
                        width={experience(`${value}.type`) === EXPERIENCE_TYPE.WORK ? 30 : 35}
                        height={0}
                        priority
                      />
                    </div>
                    <h3 className="card-title flex-1 my-2">{experience(`${value}.name`)}</h3>
                    {experience(`${value}.period.conclusion`) && (
                      <span className="text-lg font-semibold">{formatPeriod(lang, experience(`${value}.period.ingress`), experience(`${value}.period.conclusion`))}</span>
                    )}
                    <span className="text-base -mt-2">{experience(`${value}.company`)}, {experience(`${value}.location`)}</span>
                    {experience(`${value}.activities`) && (
                      <>
                        <button 
                          className="btn btn-ghost text-green-600 w-28 px-0 mt-2"
                          onClick={()=> (document.getElementById(`modal-${index}`) as HTMLFormElement).showModal()}
                        >
                          <span className="text-left">{t("view-more")}</span>
                          <Image
                            src="/arrow-btn.svg"
                            alt=""
                            className="ml-1"
                            width={16}
                            height={0}
                            priority
                          />
                        </button>
                        <dialog id={`modal-${index}`} className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <div className="flex justify-between items-center">
                              <span className="text-green-600 font-bold text-2xl">{experience(`${value}.period.ingress`).slice(0, 4)}</span>
                              <Image
                                src={experience(`${value}.type`) === EXPERIENCE_TYPE.WORK ? "/work.svg" : "/education.svg" }
                                alt=""
                                className="bg-green-600 p-2 rounded-lg"
                                width={experience(`${value}.type`) === EXPERIENCE_TYPE.WORK ? 30 : 35}
                                height={0}
                                priority
                              />
                            </div>
                            <h3 className="card-title flex-1 my-2">{experience(`${value}.name`)}</h3>
                            {experience(`${value}.period.conclusion`) && (
                              <h6 className="text-lg font-semibold">{formatPeriod(lang, experience(`${value}.period.ingress`), experience(`${value}.period.conclusion`))}</h6>
                            )}                            
                            <span className="text-base -mt-2">{experience(`${value}.company`)}, {experience(`${value}.location`)}</span>
                            <ul className="marker:text-green-600 list-disc pl-5 my-7 space-y-2">
                              {getActivitieEntries[value]?.map((actv: string, i: number) => (
                                <li key={i}>{experience(`${value}.activities.${actv}`)}</li>
                              ))}
                            </ul>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn btn-outline">Fechar</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )})}
          </SwiperCarousel>
        </div>
      </div>
    </Section>
  )
}

export default About;